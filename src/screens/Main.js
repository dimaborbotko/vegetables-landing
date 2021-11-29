import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Bottom from "./Bottom";
import Categories from "./Categories";
import FreshProduct from "./FreshProduct";
import Header from "./Header";
import NearbyProduct from "./NearbyProduct";

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <View style={styles.container}>
      <Header />
      <Categories />
      <FreshProduct />
      <NearbyProduct />
      <Bottom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
