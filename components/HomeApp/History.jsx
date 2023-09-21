import { View, Text, FlatList, ImageBackground } from "react-native";
import React from "react";
import { Image } from "react-native-magnus";

export default function History() {
  const dataHistory = [
    {
      perfilUrl:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
      historyUrl:
        "https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010_640.jpg",
    },
    {
      perfilUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      historyUrl:
        "https://cdn.pixabay.com/photo/2023/03/06/20/35/fish-7834256_640.jpg",
    },
    {
      perfilUrl:
        "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600",
      historyUrl:
        "https://cdn.pixabay.com/photo/2017/08/06/18/52/pony-2595144_640.jpg",
    },
    {
      perfilUrl:
        "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=600",
      historyUrl:
        "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      perfilUrl:
        "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600",
      historyUrl:
        "https://cdn.pixabay.com/photo/2019/07/09/08/03/boy-4326461_640.jpg",
    },
    {
      perfilUrl:
        "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600",
      historyUrl:
        "https://images.pexels.com/photos/6759836/pexels-photo-6759836.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      perfilUrl:
        "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=600",
      historyUrl:
        "https://images.pexels.com/photos/4050349/pexels-photo-4050349.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      perfilUrl:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      historyUrl:
        "https://images.pexels.com/photos/4545160/pexels-photo-4545160.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      perfilUrl:
        "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600",
      historyUrl:
        "https://images.pexels.com/photos/5240420/pexels-photo-5240420.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      perfilUrl:
        "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600",
      historyUrl:
        "https://images.pexels.com/photos/6971877/pexels-photo-6971877.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <View style={{ marginLeft: 5, marginTop: 25 }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dataHistory}
        key={({ item }) => item}
        renderItem={({ item }) => (
          <>
            <Image
              h={200}
              w={120}
              m={10}
              rounded={10}
              source={{
                uri: item.historyUrl,
              }}
            />
            <View
              style={{
                position: "absolute",
                marginTop: 18,
                marginLeft: 18,
              }}
            >
              <Image
                h={40}
                w={40}
                rounded="circle"
                borderStyle="solid"
                borderColor="rgba(215,121,255,1)"
                borderWidth={2}
                source={{
                  uri: item.perfilUrl,
                }}
              />
            </View>
          </>
        )}
      />
    </View>
  );
}
