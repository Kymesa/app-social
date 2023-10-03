import { View, Text } from "react-native";
import React from "react";
import ProductsData from "../productsData";
const Products = () => {
  return (
    <View>
      {/* {ProductsData.map((p) => (
        <View key={p.id}>
          <Text>{p.name}</Text>
        </View>
      ))}  */}
      {ProductsData.map((p) => (
        <View key={p.id}>
          <Text>{p.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default Products;
