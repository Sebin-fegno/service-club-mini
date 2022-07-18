import react from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Vehicles = ({ navigation }) => {
  return (
    <View style={styles.vehicle_card}>
      <View style={styles.vehicle_detail_container}>
        <View style={styles.vehicle_details}>
          <View style={styles.vehicle_number}>
            <Text style={styles.vehicle}>KL 38 B 9008</Text>
            <Text style={styles.wash_type}>Water Wash</Text>
          </View>
          <Text style={styles.flat}>Tirnity neptune - B317</Text>
          <View style={styles.carname_wrapper}>
            <Image source={require('../images/car.png')} style={{width:"20px", height:"20px"}}/>
            <Text style={styles.carname}>Tata Altroz</Text>
          </View>
        </View>
        <Text style={styles.wash_count}>4th Wash</Text>
      </View>
      <View style={styles.wash_details}>
        <Text>Exterior wash : 2/7</Text>
        <Text>Interior wash : 0/2</Text>
      </View>
      <Text style={styles.customer_name}>Pavan Kumar</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  vehicle_card: {
    backgroundColor: "#fff",
    borderBottomRightRadius: "10px",
    borderBottomLeftRadius: "10px",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "10px",
    paddingRight: "10px",
    // borderColor: "red",
    // borderWidth: "1px",
  },
  vehicle_detail_container: {
    flexDirection: "row",
  },
  vehicle_details: {
    flex: "auto",
  },
  vehicle_number: {
    flexDirection: "row",
  },
  vehicle: {
    borderLeftColor: "#222",
    borderRightWidth: "1px",
    paddingRight: "10px",
    fontSize: "18px",
    fontWeight: "700",
  },
  wash_count: {
    backgroundColor: "red",
    color: "#FFF",
    paddingHorizontal: "10px",
    paddingVertical: "20px",
    borderBottomRightRadius: "10px",
    borderBottomLeftRadius: "10px",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",
    justifyContent:"center",
    alignItems:"center",
    display:"flex"
  },
  wash_type: {
    paddingLeft: "10px",
  },
  flat: {
    fontWeight: "500",
    paddingVertical: "5px",
  },
  carname_wrapper:{
    flexDirection:"row",
    alignItems:"center",
  },
  carname:{
    paddingLeft:"5px",
    fontSize:"16px",
    fontFamily:"500"
  },
  wash_details:{
    paddingVertical:"10px",
    fontWeight:"500"
  },
  customer_name:{
    paddingHorizontal:"5px",
    paddingVertical:"5px",
    borderColor:"gray",
    borderWidth:"1px",
    borderBottomRightRadius: "5px",
    borderBottomLeftRadius: "5px",
    borderTopRightRadius: "5px",
    borderTopLeftRadius: "5px",
    fontSize:"16px",
    fontWeight:"500"
  },
});
export default Vehicles;
