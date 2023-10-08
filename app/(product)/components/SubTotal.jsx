import { View, Text } from "react-native";
import React from "react";

const SubTotal = ({ name, total }) => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          marginTop: 15,
          marginBottom: 10,
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 16 }}>{name}</Text>
        <Text style={{ fontWeight: "700", fontSize: 16 }}>${total}</Text>
      </View>
    </>
  );
};

export default SubTotal;
