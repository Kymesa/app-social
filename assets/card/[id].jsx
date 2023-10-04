import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const index = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Product: {id}</Text>
    </View>
  );
};

export default index;
