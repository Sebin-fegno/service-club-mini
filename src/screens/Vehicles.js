import axios from "axios";
import react, { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import VehicleCard from "../components/VehicleCard";
import { baseURL } from "../config/config";
import { AuthContext } from "../context/AuthContext";

const Vehicles = ({ navigation }) => {
  const [data, setData] = useState({});
  const { userData, Logout } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${baseURL}/community-1-wash.json`, {
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
    <View>
      <TouchableOpacity>
        <VehicleCard navigation={navigation}/>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({});
export default Vehicles;
