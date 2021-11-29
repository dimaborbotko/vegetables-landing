import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BuyVeget from "../../components/BuyVeget";

export default function FreshProduct() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.header}>Fresh Product</Text>
        <Text style={styles.linkAll}> See All</Text>
      </View>
      <View style={styles.listVeget}>
          <BuyVeget uri={require('../../assets/corn-sweet.png')} name={'Sweet Corn'} cost={'$12.99'} rate={'5.0 (982)'}/>
          <BuyVeget uri={require('../../assets/corn-flint.png')} name={'Flint Corn'} cost={'$10.99'} rate={'5.0 (878)'}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "flex-end"
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#454545",
  },
  linkAll: {
      color: '#1da124',
      fontSize: 14,
      fontWeight: "bold"
  },
  listVeget: {
      width: '90%'
  }
});
