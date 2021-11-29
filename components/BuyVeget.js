import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function BuyVeget({ uri, name, cost, rate }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} style={styles.product}>
        <View style={styles.imgBg}>
          <Image style={styles.img} source={uri} />
        </View>

        <View style={styles.info}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.cost}>{cost}</Text>
          <Text style={styles.rate}>{rate}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} style={styles.cartBtn}>
        <Ionicons style={styles.cart} name="ios-cart" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginVertical: 8,
  },
  product: {
    flexDirection: "row",
    paddingRight: 30,
  },
  imgBg: {
    backgroundColor: "#d6d6d6",
    padding: 10,
    borderRadius: 5,
  },
  img: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  info: {
    paddingLeft: 10,
    width: '60%'
  },
  cost: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1da124",
  },
  rate: {
    fontSize: 12,
    color: "#474747",
    fontStyle: "italic",
  },
  cart: {
      padding: 5,
      backgroundColor: '#1da124',
      borderRadius: 5,
      marginRight: 10
  }
});
