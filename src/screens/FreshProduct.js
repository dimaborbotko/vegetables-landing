import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image
} from "react-native";
import { useNavigation} from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function FreshProduct() {
  const navigation = useNavigation();

  const [listVeget, setListVeget] = useState([
    {
      name: "Sweet Corn",
      cost: "$12.99",
      rate: "5.0 (982)",
      uri: require("../../assets/corn-sweet.png"),
      key: 1,
    },
    {
      name: "Flint Corn",
      cost: "$10.99",
      rate: "5.0 (878)",
      uri: require("../../assets/corn-flint.png"),
      key: 2,
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.header}>Fresh Product</Text>
        <Text style={styles.linkAll}>See All</Text>
      </View>
      <View style={styles.listVeget}>
        <FlatList
          data={listVeget}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Product", item)}
            >
              
              <View style={styles.containerList}>
                <View style={styles.productList}>
                  <View style={styles.imgBgList}>
                    <Image style={styles.imgList} source={item.uri} />
                  </View>

                  <View style={styles.infoList}>
                    <Text style={styles.textList}>{item.name}</Text>
                    <Text style={styles.costList}>{item.cost}</Text>
                    <Text style={styles.rateList}>{item.rate}</Text>
                  </View>
                </View>
                <TouchableOpacity activeOpacity={0.7} >
                  <Ionicons
                    style={styles.cartList}
                    name="ios-cart"
                    size={25}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
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
    marginTop: 20,
    alignItems: "flex-end",
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
  listVeget: {
    width: "90%",
  },


  containerList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginVertical: 8,
  },
  productList: {
    flexDirection: "row",
    paddingRight: 30,
  },
  imgBgList: {
    backgroundColor: "#d6d6d6",
    padding: 10,
    borderRadius: 5,
  },
  imgList: {
    width: 50,
    height: 50,
  },
  textList: {
    fontSize: 15,
    fontWeight: "bold",
  },
  infoList: {
    paddingLeft: 10,
    width: '60%'
  },
  costList: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1da124",
  },
  rateList: {
    fontSize: 12,
    color: "#474747",
    fontStyle: "italic",
  },
  cartList: {
      padding: 5,
      backgroundColor: '#1da124',
      borderRadius: 5,
      marginRight: 10
  }
});
