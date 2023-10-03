import { View, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Text, Image, Icon } from "react-native-magnus";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function ProductCard({ product }) {
  const [love, setLove] = useState(false);
  const handleClickLike = () => {
    setLove(!love);
  };
  return (
    // <Pressable>
    <View style={styles.container}>
      <View style={styles.fondo}>
        <TouchableOpacity onPress={handleClickLike}>
          <Icon
            position="absolute"
            right={0}
            top={0}
            name="heart"
            color={love ? "red600" : "gray600"}
            fontSize={25}
            fontFamily="AntDesign"
          />
        </TouchableOpacity>

        <Image
          h={100}
          // zIndex={1}
          zIndex={-99}
          resizeMode="contain"
          borderWidth={1}
          borderColor="gray300"
          rounded="lg"
          w="100%"
          source={{
            uri: product.imgUrl,
          }}
        />
      </View>
      <Text fontWeight="bold" fontSize={15} textAlign="center">
        {product.name}
      </Text>
      <Text fontWeight="bold" ml={5} my={3}>
        ${product.price}
      </Text>
    </View>
    // </Pressable>
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
    // width: wp(20),
  },
  fondo: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
  },
});
