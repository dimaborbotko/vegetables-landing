import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
