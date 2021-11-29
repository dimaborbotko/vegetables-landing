import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import NearbyList from "../../components/NearbyList";

export default function NearbyProduct() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.header}>Nearby Product</Text>
        <Text style={styles.linkAll}> See All</Text>
      </View>
      <ScrollView style={styles.scrollItem} horizontal={true} showsHorizontalScrollIndicator={false}>
          <NearbyList uri={require('../../assets/red-chili-pepper.png')}/>
          <NearbyList uri={require('../../assets/broccoli.png')}/>
          <NearbyList uri={require('../../assets/apple.png')}/>
          <NearbyList uri={require('../../assets/red-chili-pepper.png')}/>
          <NearbyList uri={require('../../assets/broccoli.png')}/>
          <NearbyList uri={require('../../assets/apple.png')}/>
      </ScrollView>
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
    marginTop: 15,
    alignItems: "flex-end",
    marginBottom: 15
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#454545",
  },
  linkAll: {
    color: "#1da124",
    fontSize: 14,
    fontWeight: "bold",
  },
  scrollItem: {
    marginLeft: 5
  }
});
