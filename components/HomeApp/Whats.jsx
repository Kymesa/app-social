import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native-magnus";

const Whats = () => {
  return (
    <View
      style={{
        marginTop: 10,
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Image
        h={45}
        w={45}
        m={10}
        mr={30}
        rounded="circle"
        source={{
          uri: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600",
        }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 15 }}>
        What's on your head?
      </Text>
    </View>
  );
};

export { Whats };
