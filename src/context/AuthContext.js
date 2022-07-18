import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import react, { createContext, useState } from "react";
import { baseURL } from "../config/config";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const Login = (username, password) => {
    setIsLoading(true);
    axios
      .post(`${baseURL}/api/v1/dashboard/user/login/`, {
        username,
        password,
      })
      .then((res) => {
        setIsLoading(false);
        setUserData(res.data);
        AsyncStorage.setItem("Token", JSON.stringify(res.data.key));
        console.log(res);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const Logout = () => {
    axios.post(`${baseURL}/logout`);
  };

  return (
    <AuthContext.Provider value={{ isLoading, userData, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};
