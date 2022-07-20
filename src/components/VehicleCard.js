import react from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const VehicleCard = ({ navigation }) => {
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
            <Image source={require('../images/car.png')} style={{width:20, height:20}}/>
            <Text style={styles.carname}>Tata Altroz</Text>
          </View>
        </View>
        <Text style={styles.wash_count}>4th Wash</Text>
      </View>
      <View style={styles.wash_details}>
        <Text style={{color:"#ff6801"}}>Exterior wash : 2/7</Text>
        <Text>Interior wash : 0/2</Text>
      </View>
      <View style={styles.btn_wrapper}>
        <Button title="Confirm" style={styles.btn_confirm} onPress={()=>{navigation.navigate('Confirm Wash')}}/>
        <Button title="cancel" style={styles.btn_cancel} color="red" onPress={()=>{navigation.navigate('Cancel Wash')}}/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  vehicle_card: {
    backgroundColor: "#fff",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  vehicle_detail_container: {
    flexDirection: "row",
    justifyContent:"space-between"
  },
  vehicle_details: {
  },
  vehicle_number: {
    flexDirection: "row",
  },
  vehicle: {
    borderLeftColor: "#222",
    borderRightWidth: 1,
    paddingRight: 10,
    fontSize: 18,
    fontWeight: '700',
  },
  wash_count: {
    backgroundColor: "#ff6801",
    color: "#FFF",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    justifyContent:"center",
    alignItems:"center",
  },
  wash_type: {
    paddingLeft: 10,
  },
  flat: {
    fontWeight: '500',
    paddingVertical: 5,
  },
  carname_wrapper:{
    flexDirection:"row",
    alignItems:"center",
  },
  carname:{
    paddingLeft:5,
    fontSize:16,
    fontFamily:'500'
  },
  wash_details:{
    paddingVertical:10,
    fontWeight:'500'
  },
  customer_name:{
    paddingHorizontal:5,
    paddingVertical:5,
    borderColor:"gray",
    borderWidth:1,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    fontSize:16,
    fontWeight:'500'
  },
  btn_wrapper:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    marginTop:10
  },
  btn_cancel:{
    color:"red"
  }
});
export default VehicleCard;
