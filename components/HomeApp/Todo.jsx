import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "react-native-magnus";

const Todo = () => {
  return (
    <View
      style={{
        marginTop: 10,
        margin: 10,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#F7F3F3",
          paddingHorizontal: 25,
          borderRadius: 10,
          paddingVertical: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon
            mr={5}
            rounded="circle"
            name="video-camera"
            color="pink600"
            fontSize="xl"
            fontFamily="FontAwesome"
          />

          <Text style={{ fontWeight: "bold" }}> Live </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#F7F3F3",
          paddingHorizontal: 25,
          borderRadius: 10,
          paddingVertical: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon
            mr={5}
            rounded="circle"
            name="photo"
            color="purple600"
            fontSize="xl"
            fontFamily="Foundation"
          />

          <Text style={{ fontWeight: "bold" }}> Phone </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#F7F3F3",
          paddingHorizontal: 25,
          borderRadius: 10,
          paddingVertical: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon
            mr={5}
            rounded="circle"
            name="video-camera"
            color="pink600"
            fontSize="xl"
            fontFamily="Entypo"
          />

          <Text style={{ fontWeight: "bold" }}> Room </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export { Todo };
