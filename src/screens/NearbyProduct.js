import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react/cjs/react.development";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import NearbyAll from "../products/NearbyAll";

export default function NearbyProduct({ }) {
  const navigation = useNavigation();
  const [nearbyPr, setNearbyPr] = useState([
    {
      uri: require("../../assets/red-chili-pepper.png"),
      name: "Red Pepper",
      cost: "8.12",
      rate: "3.4",
      key: 1,
    },
    {
      uri: require("../../assets/broccoli.png"),
      name: "Main Broccoli",
      cost: "10.11",
      rate: "4.5",
      key: 2,
    },
    {
      uri: require("../../assets/apple.png"),
      name: "Gold Apple",
      cost: "15.10",
      rate: "5.0",
      key: 3,
    },
    {
      uri: require("../../assets/red-chili-pepper.png"),
      name: "Strong Pepper",
      cost: "12.10",
      rate: "4.8",
      key: 4,
    },
    {
      uri: require("../../assets/broccoli.png"),
      name: "Jam Broccoli",
      cost: "17.20",
      rate: "4.3",
      key: 5,
    },
    {
      uri: require("../../assets/apple.png"),
      name: "Green Apple",
      cost: "4.29",
      rate: "4.2",
      key: 6,
    }
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.header}>Nearby Product</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("NearbyAll", {nearbyPr: nearbyPr})}
        >
          <Text style={styles.linkAll}> See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.scrollItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {nearbyPr.map((item) => (
          <TouchableOpacity style={styles.box} activeOpacity={0.7} onPress={() => navigation.navigate("Product", item)}>
          <View style={styles.contImg}>
            <Image style={styles.img} source={item.uri} />
          </View>
          <Text style={styles.costNearby}>{`$${item.cost}`}</Text>
          <Text style={styles.rateNearby}>
            <FontAwesome name="star" size={15} color="gold" /> {item.rate}
          </Text>
        </TouchableOpacity>
        ))}
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
    marginBottom: 10,
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
    marginLeft: 5,
  },
  box: {
    marginHorizontal: 15,
  },
  contImg: {
    backgroundColor: "#d6d6d6",
    padding: 10,
    borderRadius: 5,
  },
  img: {
    width: 70,
    height: 70,
  },
  costNearby: {
    color: "#1da124",
    fontSize: 16,
    fontWeight: "bold",
  },
  rateNearby: {
    fontStyle: "italic",
    color: "#474747",
  },
});
