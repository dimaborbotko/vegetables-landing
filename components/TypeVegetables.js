import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function TypeVegetables({ text, uri }) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.posa]}>
      <Image style={styles.img} source={uri} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  posa: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: '#1da124',
    borderRadius: 5,
    marginTop: 10
  },
  img: {
    width: 15,
    height: 15,
  },
  text: {
    fontWeight: "bold",
    fontSize: 14,
    paddingLeft: 5,
    color: 'white'
  },
});
