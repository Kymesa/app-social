import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Text, Image, Icon } from "react-native-magnus";
export default function ProductCard({ product, eventProduct }) {
  return (
    <View style={styles.container}>
      <View style={styles.fondo}>
        <TouchableOpacity onPress={() => eventProduct(product)}>
          <Image
            h={100}
            resizeMode="contain"
            borderWidth={1}
            borderColor="gray300"
            rounded="lg"
            w="100%"
            source={{
              uri: product.imgUrl,
            }}
          />
        </TouchableOpacity>
      </View>
      <Text fontWeight="bold" fontSize={15} textAlign="center">
        {product.name}
      </Text>
      <View
        style={{
          marginTop: 5,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text fontWeight="bold" ml={5} my={3}>
          ${product.price}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Icon
            name="star"
            color="yellow500"
            fontSize={15}
            fontFamily="FontAwesome"
          />
          <Text fontWeight="bold" ml={5}>
            ${product.rating}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F6F8",
    flex: 1,
    margin: 10,
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000",
    padding: 9,
  },
  fondo: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
  },
});
