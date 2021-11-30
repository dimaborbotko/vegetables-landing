import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react/cjs/react.development";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function NearbyAll({ route }) {
  const navigation = useNavigation();
  const { nearbyPr } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          onPress={() => navigation.navigate("Main")}
          name="left"
          size={24}
          color="white"
        />
        <Text style={styles.text}>All Nearby Product</Text>
      </View>
      <ScrollView
        style={styles.scrollItem}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
      >
        {nearbyPr.map((item) => {
          return (
            <TouchableOpacity
              key={item.key}
              style={styles.box}
              activeOpacity={0.7}
              onPress={() => navigation.navigate("Product", item)}
            >
              <View style={styles.contImg}>
                <Image style={styles.img} source={item.uri} />
              </View>

              <View style={styles.costMenu}>
                <Text style={styles.nameAll}>{item.name}</Text>
                <Text style={styles.costNearby}>{`$${item.cost}`}</Text>
                <Text style={styles.rateNearby}>
                  <FontAwesome name="star" size={15} color="gold" /> {item.rate}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#7dad6a",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 15,
    color: "white",
  },
  scrollItem: {
    marginLeft: 5,
    marginTop: 30,
  },
  box: {
    marginHorizontal: 15,
    flexDirection: "row",
    marginVertical: 10,
  },
  costMenu: {
    flexDirection: "column",
    marginLeft: 10,
    justifyContent: "space-between",
  },
  contImg: {
    backgroundColor: "#d6d6d6",
    padding: 10,
    borderRadius: 5,
  },
  nameAll: {
    color: "#474747",
    fontWeight: "bold",
    fontSize: 18,
  },
  img: {
    width: 70,
    height: 70,
  },
  costNearby: {
    color: "#1da124",
    fontSize: 25,
    fontWeight: "bold",
  },
  rateNearby: {
    fontStyle: "italic",
    color: "#474747",
  },
});
