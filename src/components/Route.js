import { View, Text } from "react-native";
import React, { useContext } from "react";
import Header from "./Header";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Vehicles from "../screens/Vehicles";
import { AuthContext } from "../context/AuthContext";

const Route = () => {
  const Stack = createNativeStackNavigator();
  const { userData } = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userData.key ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Vehicles" component={Vehicles} />
          </>
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
