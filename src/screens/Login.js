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
  const { isLoading, Login, Logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      {isLoading && <View style={styles.overlay}></View>}
      <Image
        source={require("../images/login.jpg")}
        style={{ width: "250px", height: "250px" }}
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
        <Button title="Logout" onPress={()=>{Logout()}} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#fff",
  },
  login_title: {
    fontSize: "30px",
    fontWeight: "500",
  },
  input: {
    width: "100%",
    height: "35px",
    padding: "20px",
    fontSize: "18px",
    marginBottom: "10px",
    borderWidth: "1px",
    borderColor: "#61e2ff",
    borderRadius: "8px",
  },
  input_wrapper: {
    width: "100%",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  overlay:{
    position:"fixed",
    backgroundColor:"#C0C0C0",
    opacity:"0.5",
    top:"0",
    bottom:"0",
    zIndex:"999",
    left:"0",
    right:"0"
  }
});
export default Login;
