import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

const EmptyCart = () => {
  return (
    <View style={styles.cart}>
      <Text style={styles.heading}>Your cart is empty</Text>
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({
  cart: {
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
    marginTop: "90%",
  },
  heading: {
    color: "gray",
    fontSize: 22,
    fontWeight: 600,
  },
});
