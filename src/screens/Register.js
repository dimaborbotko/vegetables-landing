import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import HeaderButton from "../../components/HeaderButton";

export default function Register({ navigation }) {
  
  // const loadMain = () => {
  //   navigation.navigate('Main')
  // }

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.title}>
          <Text style={styles.textFirst}>
            Me <Text style={styles.textSecond}>Vegeterian</Text>
          </Text>
          <Text style={styles.subText}>Choose special Vegetables for you</Text>
        </View>
        <View style={styles.img}>
          <Image
            style={styles.imageMan}
            source={{
              uri: "https://png.pngtree.com/png-vector/20200901/ourlarge/pngtree-men-shopping-smilling-illustration-png-image_2336753.jpg",
            }}
          />
        </View>
        <View style={styles.formReg}>
          <HeaderButton text="Sign in" onPress={() => navigation.navigate('Main')}/>
          <Text style={styles.register}>
            Don`t have an account ? <Text style={styles.linkReg}>Register</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginVertical: 40,
  },
  subContainer: {
    flex: 1,
    width: "85%",
  },

  title: {
    alignItems: "center",
  },
  textFirst: {
    fontSize: 28,
    fontWeight: "700",
    color: "#f5b342",
  },
  textSecond: {
    color: "#1da124",
  },
  subText: {
    fontSize: 16,
    color: "#6b6b6b",
  },
  img: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
  },
  imageMan: {
    width: 300,
    height: 400,
  },
  register: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
    color: "#474747",
    fontWeight: "700",
  },
  linkReg: {
    color: "#1da124",
  },
});
