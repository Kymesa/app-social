import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Icon } from "react-native-magnus";

export default function PlayerdCard({ title, album, img }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "RED",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <TouchableOpacity>
        <Image
          source={{
            uri: img,
          }}
          resizeMode="contain"
          width={70}
          height={70}
          style={{ borderRadius: 25, margin: 10 }}
        />
      </TouchableOpacity>

      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
        <Text style={{ color: "gray", fontSize: 12 }}>{album}</Text>
        <View
          style={{
            marginTop: 20,
            height: 1,
            width: "100%",
            backgroundColor: "#ddd",
          }}
        />
      </View>
      <TouchableOpacity>
        <Icon
          bg="white"
          p={20}
          rounded="circle"
          name="kebab-horizontal"
          color="gray"
          fontSize="xl"
          fontFamily="Octicons"
        />
      </TouchableOpacity>
    </View>
  );
}
