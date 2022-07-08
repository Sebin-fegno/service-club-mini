import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const Header = ({ navigation }) => {
  const onPressButton = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.button}>
      <Text>Header</Text>
      <Text>Hello world</Text>
      <Button title="Click me" onPress={onPressButton}/>
    </View>
  );
};
const styles= StyleSheet.create({
    button:{
        backgroundColor:"red",
    }
})
export default Header;
