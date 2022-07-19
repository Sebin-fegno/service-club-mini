import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import react, { createContext, useEffect, useState } from "react";
import { baseURL } from "../config/config";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const Login = (username, password) => {
    setIsLoading(true);
    axios
      .post(`${baseURL}/oauth/login.api`, {
        username,
        password,
      })
      .then((res) => {
        setIsLoading(false);
        setUserData(res.data);
        AsyncStorage.setItem("Key", JSON.stringify(res.data));
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };
  const Logout = () => {
    axios.post(`${baseURL}/oauth/logout.api`).then((res) => {
      AsyncStorage.removeItem("Key");
      setUserData({});
    });
  };
  const isLoggedIn = async () => {
    try {
      let data = await AsyncStorage.getItem("Key");
      data = JSON.parse(data);
      if (data) {
        setUserData(data);
      }
    } catch (e) {
      console.log("isLoggedIn error");
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider value={{ isLoading, userData, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};
