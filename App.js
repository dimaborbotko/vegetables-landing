import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './src/screens/Register'
import Main from './src/screens/Main'
import Product from './src/products/Product'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register" screenOptions={{headerShown: false}}>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
