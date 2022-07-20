import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Alert,
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay/lib";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {};
  const { isLoading, Login, Logout, userData } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      {isLoading && <View style={styles.overlay}></View>}
      <Image
        source={require("../images/login.jpg")}
        style={{ width: 250, height: 250 }}
      />
      <View style={styles.input_wrapper}>
        <TextInput
          style={styles.input}
          placeholder="User ID"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
        <Button
          title="Login"
          onPress={() => {
            Login(username, password);
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#fff",
  },
  login_title: {
    fontSize: 30,
    fontWeight: '500',
  },
  input: {
    width: "100%",
    height: 45,
    fontSize: 18,
    marginBottom: 10,
    paddingHorizontal:10,
    paddingVertical:10,
    borderWidth: 1,
    borderColor: "#61e2ff",
    borderRadius: 8,
    color: "#111",
  },
  input_wrapper: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  overlay: {
    position: "absolute",
    backgroundColor: "#C0C0C0",
    opacity: 0.5,
    top: 0,
    bottom: 0,
    zIndex: 999,
    left: 0,
    right: 0,
  },
});
export default Login;
