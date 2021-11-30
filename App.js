import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./src/screens/Register";
import Main from "./src/screens/Main";
import Product from "./src/products/Product";
import NearbyAll from "./src/products/NearbyAll";
import AllProduct from "./src/products/AllProduct";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Register"
        screenOptions={{ headerShown: false}}
      >
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ title: "Opening" }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: "Main" }}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{ title: "Product" }}
        />
        <Stack.Screen
          name="NearbyAll"
          component={NearbyAll}
          options={{ title: "NearbyAll" }}
        />
        <Stack.Screen
          name="AllProduct"
          component={AllProduct}
          options={{ title: "AllProduct" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
