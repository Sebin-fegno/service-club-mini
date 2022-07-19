import { View, Text, StyleSheet, Button } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import CommunityCard from "../components/CommunityCard";
import Vehicles from "./Vehicles";
import axios from "axios";
import Header from "../components/Header";
import { baseURL } from "../config/config";
const Home = ({ navigation }) => {
  const { userData, Logout } = useContext(AuthContext);
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`${baseURL}/communities.json`, {
        headers: {
          Authorization: `Token ${userData.key}`,
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <View style={styles.home}>
      <Header />
      <CommunityCard navigation={navigation} />
      {JSON.stringify(data)}
    </View>
  );
};
const styles = StyleSheet.create({
  home: {},
});

export default Home;
