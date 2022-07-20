import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
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
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  return (
    <View style={styles.home}>
      <Header />
         {data&& data.results && data.results.map((item,index)=>{
          return(
            <TouchableOpacity
            onPress={() => {
              navigation.navigate("Vehicles");
            }}
            style={styles.card_wrapper}
            key={`community${index}`}
          >
            <CommunityCard navigation={navigation} community={item}/>
          </TouchableOpacity>
          )
         })}
    </View>
  );
};
const styles = StyleSheet.create({
  home: {
  },
  card_wrapper:{
    marginBottom:10
  }
});

export default Home;
