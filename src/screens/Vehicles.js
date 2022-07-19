import react, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import VehicleCard from "../components/VehicleCard";

const Vehicles = ({ navigation }) => {
  // const [data, setData] = useState({});
  // useEffect(()=>{

  // })
  return (
    <View>
      <TouchableOpacity>
        <VehicleCard />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({});
export default Vehicles;
