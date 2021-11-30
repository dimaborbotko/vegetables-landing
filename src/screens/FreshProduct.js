import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Categories from "./Categories";

export default function FreshProduct() {
  const navigation = useNavigation();

  const [statusActive, setStatusActive] = useState("corn");
  const [listVeget, setListVeget] = useState([
    {
      name: "Sweet Corn",
      cost: "12.99",
      rate: "5.0 (982)",
      uri: require("../../assets/corn-sweet.png"),
      typeProduct: "corn",
      key: 1,
    },
    {
      name: "Flint Corn",
      cost: "10.99",
      rate: "5.0 (878)",
      uri: require("../../assets/corn-flint.png"),
      typeProduct: "corn",
      key: 2,
    },
    {
      name: "Tasty Potato",
      cost: "5.99",
      rate: "4.7 (2956)",
      uri: require("../../assets/potato-taste.png"),
      typeProduct: "potato",
      key: 3,
    },
    {
      name: "USA Potato",
      cost: "11.09",
      rate: "4.8 (576)",
      uri: require("../../assets/potato-two.png"),
      typeProduct: "potato",
      key: 4,
    },
    {
      name: "Big Cabbage",
      cost: "13.00",
      rate: "4.8 (9182)",
      uri: require("../../assets/cabbage-one.png"),
      typeProduct: "cabbage",
      key: 5,
    },
    {
      name: "UK Kingdom",
      cost: "14.99",
      rate: "4.2 (728)",
      uri: require("../../assets/red-cabbage.png"),
      typeProduct: "cabbage",
      key: 6,
    },
  ]);

  const productItem = ({ item }) => {
    if (item.typeProduct === statusActive) {
      return (
        <TouchableOpacity onPress={() => navigation.navigate("Product", item)}>
          <View style={styles.containerList}>
            <View style={styles.productList}>
              <View style={styles.imgBgList}>
                <Image style={styles.imgList} source={item.uri} />
              </View>

              <View style={styles.infoList}>
                <Text style={styles.textList}>{item.name}</Text>
                <Text style={styles.costList}>{`$${item.cost}`}</Text>
                <Text style={styles.rateList}>{item.rate}</Text>
              </View>
            </View>
            <TouchableOpacity activeOpacity={0.7}>
              <Ionicons
                style={styles.cartList}
                name="ios-cart"
                size={25}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      );
    }
  };

  return (
    
    
    <View style={styles.container}>
      <Categories
        statusActive={statusActive}
        setStatusActive={setStatusActive}
      />
      <View style={styles.title}>
        <Text style={styles.header}>Fresh Product</Text>
        <Text style={styles.linkAll}>See All</Text>
      </View>
      <View style={styles.listVeget}>
        <FlatList
          data={listVeget}
          renderItem={productItem}
          keyExtractor={(item) => item.key}
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
    width: "60%",
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
    backgroundColor: "#1da124",
    borderRadius: 5,
    marginRight: 10,
  },
});
