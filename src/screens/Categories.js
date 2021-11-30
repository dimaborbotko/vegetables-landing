import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const listType = [
  {
    name: 'Corn',
    type: "corn",
    uri: require("../../assets/corn.png"),
    key: 1,
  },
  {
    name: 'Potato',
    type: "potato",
    uri: require("../../assets/sweet-potato.png"),
    key: 2,
  },
  {
    name: 'Cabbage',
    type: "cabbage",
    uri: require("../../assets/cabbage.png"),
    key: 3,
  },
];

export default function Categories({statusActive, setStatusActive}) {
  
  const statusFilter = (statusActive) => {
    setStatusActive(statusActive);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subCont}>
        <Text style={styles.title}>Categories</Text>
        <View style={styles.listVaget}>
          {listType.map((e) => (
            <TouchableOpacity
              style={[styles.posa, statusActive === e.type && styles.btnTypeActive]}
              activeOpacity={0.7}
              onPress={() => statusFilter(e.type)}
            >
              <Image style={styles.img} source={e.uri} />
              <Text style={[styles.text, statusActive === e.type && styles.textActive]}>{e.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  subCont: {
    width: "90%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#454545",
  },
  listVaget: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: '90%'
  },
  posa: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 10,
  },
  img: {
    width: 15,
    height: 15,
  },
  text: {
    fontWeight: "bold",
    fontSize: 14,
    paddingLeft: 5,
    color: "black",
  },
  textActive: {
    color: 'white'
  },
  btnTypeActive: {
    backgroundColor: '#1da124'
  }
});
