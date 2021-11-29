import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default function Product({ route, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground style={styles.imgBg} source={route.params.uri}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('Main')}>
                <AntDesign
                style={styles.backGo}
                name="left"
                size={24}
                color="black"
            />
            </TouchableOpacity>
            
          <Ionicons
            style={styles.share}
            name="share-social"
            size={24}
            color="black"
          />
        </ImageBackground>
      </View>
      <View style={styles.info}>
        <View style={styles.mainData}>
          <Text style={styles.name}>{route.params.name}</Text>
          <View style={styles.money}>
            <Text style={styles.cost}>{route.params.cost}</Text>
            <Text style={styles.quantity}>NNN</Text>
          </View>
          <Text style={styles.rate}>{route.params.rate}</Text>
          <Text style={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>

          <View style={styles.comments}>
            <Text style={styles.titleCom}>Reviews</Text>
            <View style={styles.box}>
              <Image
                style={styles.profileImg}
                source={require("../../assets/commentImg.jpg")}
              />
              <View style={styles.userInfo}>
                <Text style={styles.titleCom}>Novican</Text>
                <View style={styles.userRate}>
                  <Text style={styles.rate}>5.0 Reviews</Text>
                  <Text style={styles.rate}>Apr 29, 2021</Text>
                </View>
              </View>
            </View>
            <Text style={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem
            </Text>
          </View>
        </View>
        <View style={styles.orderSize}>
          <View style={styles.order}>
            <TouchableOpacity activeOpacity={0.7}>
              <Ionicons
                style={styles.cart}
                name="ios-cart"
                size={25}
                color="#1da124"
              />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={styles.buyIt}>
              <Text style={styles.textBuy}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  backGo: {
    borderRadius: 5,
    backgroundColor: "white",
    height: 33,
    padding: 5,
    marginTop: 40,
    marginLeft: 15,
  },
  share: {
    borderRadius: 5,
    backgroundColor: "white",
    height: 33,
    padding: 5,
    marginTop: 40,
    marginRight: 15,

  },
  imgBg: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },

  info: {
    flex: 3,
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "center",
    backgroundColor: "white",
  },
  mainData: {
    width: "90%",
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#474747",
  },
  money: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10
  },
  cost: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1da124",
  },
  quantity: {
    color: "green",
  },
  rate: {
    fontSize: 12,
    color: "#474747",
    fontStyle: "italic",
  },
  description: {
    fontSize: 14,
    color: "#ababab",
    marginBottom: 15,
  },

  titleCom: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#454545",
  },
  box: {
    flexDirection: "row",
    marginTop: 20,
  },
  profileImg: {
    height: 50,
    width: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  userRate: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "74%",
    marginBottom: 15,
  },

  order: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 20,
  },
  cart: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#1da124",
    padding: 10,
    flex: 1,
  },
  buyIt: {
    padding: 15,
    backgroundColor: "#1da124",
    borderRadius: 5,
    flex: 12,
    marginLeft: 15,
  },
  textBuy: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
});
