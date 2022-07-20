import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const WashCancel = () => {
  return (
    <View>
      <Text style={styles.hint}>Upload picture of vehicle</Text>
      <View style={styles.btn_wrapper}>
        <Button title="Submit" style={styles.btn} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  hint: {
    fontSize: 18,
    fontWeight: "500",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  btn_wrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default WashCancel;
