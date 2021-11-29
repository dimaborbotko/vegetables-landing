import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TypeVegetables from "../../components/TypeVegetables";

export default function Categories() {
  return (
    <View style={styles.container}>
      <View style={styles.subCont}>
        <Text style={styles.title}>Categories</Text>
        <View style={styles.listVaget}>
            <TypeVegetables text={'Corn'} uri={require('../../assets/corn.png')}/>
            <TypeVegetables text={'Potato'} uri={require('../../assets/sweet-potato.png')}/>
            <TypeVegetables text={'Cabbage'} uri={require('../../assets/cabbage.png')}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20
  },
  subCont: {
    width: "90%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#454545'
  },
  listVaget: {
      flexDirection: "row",
      justifyContent: "space-between",
  }
});
