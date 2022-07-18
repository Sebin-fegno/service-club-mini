import { View, Text, Button, StyleSheet, Image } from "react-native";
import React from "react";

const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <View style={styles.menu}></View>
      <View style={styles.menu_wrapper}>
      <Image source={require("../images/menu.png")} style={{width:"20px",height:"30px"}}/>
      </View>
      <View>
      <Image source={require("../images/notification.png")} style={{width:"20px",height:"30px"}}/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    paddingVertical:"10px",
    paddingHorizontal:"25px",
    flexDirection:"row",
  },
  menu_wrapper:{
    flex:"auto"
  },
  menu:{
    backgroundColor:"red",
    width:"90%",
    position:"fixed",
    top:"0",
    left:"0",
    bottom:"0",
    height:"500px",
    zIndex:"999"
  }
});
export default Header;
