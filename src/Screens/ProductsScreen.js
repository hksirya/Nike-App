import { View, FlatList, StyleSheet, Image, Pressable } from "react-native";
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { productSlice } from "../store/productSlice";

const ProductsScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            // Update selected Products
            dispatch(productSlice.actions.setSelectedProduct(item.id));
            navigation.navigate("Product Details");
          }}
          style={styles.ItemContainer}
        >
          <Image style={styles.image} source={{ uri: item.image }} />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    justifyContent: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  ItemContainer: {
    width: "50%",
    padding: 1,
  },
});

export default ProductsScreen;
