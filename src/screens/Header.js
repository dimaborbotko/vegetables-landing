import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { EvilIcons, Octicons, Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.centerLoc}>
        <View style={styles.location}>
          <View>
            <View style={styles.country}>
              <Ionicons name="ios-location-outline" size={18} color="#1da124" />
              <Text style={styles.countryText}>Malang, Indonesia</Text>
              <Octicons name="chevron-down" size={15} color="#f5b342" />
            </View>
            <Text style={styles.title}>
              Find <Text style={styles.subTitle}>Fresh Vegetables</Text>
            </Text>
          </View>
          <View>
            <Image
              style={styles.profileImg}
              source={require("../../assets/profileImg.jpg")}
            />
          </View>
        </View>
      </View>
      <View style={styles.input}>
        <View style={styles.inputCont}>
          <Ionicons name="search" size={16} color="#1da124" />
          <TextInput style={styles.inputText} placeholder="Search Vegetables" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  centerLoc: {
    alignItems: "center",
  },
  location: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  country: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  countryText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#474747",
    paddingHorizontal: 5,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f5b342",
    marginTop: 10,
  },
  subTitle: {
    color: "#1da124",
  },

  profileImg: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },

  input: {
    alignItems: "center",
  },
  inputCont: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ababab",
    flexDirection: "row",
    width: "90%",
  },
  inputText: {
    // marginLeft: 30,
    padding: 10,
    width: "90%",
  },
});
