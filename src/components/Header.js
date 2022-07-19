import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Header = ({ navigation }) => {
  const { Logout } = useContext(AuthContext);
  const alertBox = () => {
    Alert.alert("Are you sure", "Do you want to logout", [
      {
        text: "ok",
        onPress: () => {
          Logout();
        }
      },{
        text:"cancel"
      }
    ]);
  };
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Service Club</Text>
      <TouchableOpacity onPress={()=>{alertBox()}}>
        <Image source={require("../images/logout.png")} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 25,
    flexDirection: "row",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontWeight: "700",
    fontSize: 25,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
export default Header;
