import { View, Text } from "react-native";
import React from "react";
import { Icon, Image, Input } from "react-native-magnus";

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
          uri: "https://images.unsplash.com/photo-1693249646175-8b21fe05acc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 15 }}>
        What's on your head?
      </Text>
      {/* <Input
        w="75%"
        fontWeight="bold"
        placeholderTextColor="black"
        placeholder="What's On Your Head"
        focusBorderColor="white"
        borderColor="white"
      /> */}
    </View>
  );
};

export { Whats };
