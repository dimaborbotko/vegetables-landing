import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function NearbyList({ uri }) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.box}>
      <Image style={styles.img} source={uri} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#d6d6d6",
    padding: 20,
    borderRadius: 5,
    marginHorizontal: 15
  },
  img: {
      width: 70,
      height: 70
  }
});
