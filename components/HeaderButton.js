import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HeaderButton({ text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.75}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#1da124',
        padding: 10,
        borderRadius: 10,
    },
    btnText: {
        textAlign: "center",
        color: 'white',
        fontSize: 16,
        padding: 3,
        fontWeight: "bold"
    },
});
