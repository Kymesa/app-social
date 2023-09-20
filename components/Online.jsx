import { View, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Badge, Image } from "react-native-magnus";

const Online = () => {
  const imagesAvatar = [
    {
      name: "example123",
      urlImage:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: true,
    },
    {
      name: "example123",
      urlImage:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: true,
    },
    {
      name: "example123",
      urlImage:
        "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: false,
    },
    {
      name: "example123",
      urlImage:
        "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: true,
    },
    {
      name: "example123",
      urlImage:
        "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: false,
    },
    {
      name: "example123",
      urlImage:
        "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: false,
    },
    {
      name: "example123",
      urlImage:
        "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: true,
    },
    {
      name: "example123",
      urlImage:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: false,
    },
    {
      name: "example123",
      urlImage:
        "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: true,
    },
    {
      name: "example123",
      urlImage:
        "https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: true,
    },
  ];
  return (
    <View style={{ marginTop: 25, marginLeft: 15 }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={imagesAvatar}
        key={({ item }) => item}
        renderItem={({ item }) => (
          <Badge
            bg={item.status ? "green400" : "red600"}
            right={26}
            top={54}
            h={12}
            w={12}
          >
            <Image
              // ml="md"
              h={70}
              w={70}
              mr={20}
              rounded="circle"
              source={{
                uri: item.urlImage,
              }}
            />
          </Badge>
        )}
      />
    </View>
  );
};

export default Online;
