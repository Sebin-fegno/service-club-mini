import { View, Text } from "react-native";
import React from "react";
import Header from "./Header";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Vehicles from "../screens/Vehicles";

const Route = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Vehicles" component={Vehicles} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
