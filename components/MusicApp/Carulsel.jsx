import React, { useRef } from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import { View, Text, Dimensions, StyleSheet, Animated } from "react-native";
import { Icon } from "react-native-magnus";
const Carulsel = () => {
  const images = [
    {
      id: 1,
      titulo: "Billie Jean",
      album: "Thriller",
      img: "https://images.unsplash.com/photo-1693724315464-781ede3a4767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      titulo: "Let It Be",
      album: "Let It Be",
      img: "https://images.unsplash.com/photo-1692789183372-1b4b9f73a5ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      titulo: "Imagine",
      album: "Imagine",
      img: "https://images.unsplash.com/photo-1693835843843-82f691094f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      titulo: "Billie Jean",
      album: "Thriller",
      img: "https://images.unsplash.com/photo-1561505445-3d89277edf4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      titulo: "Bohemian Rhapsody",
      album: "A Night at the Opera",
      img: "https://images.unsplash.com/photo-1688302231150-f1d390ac872f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3OHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      titulo: "Billie Jean",
      album: "Thriller",
      img: "https://images.unsplash.com/photo-1693724315464-781ede3a4767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 7,
      titulo: "Let It Be",
      album: "Let It Be",
      img: "https://images.unsplash.com/photo-1692789183372-1b4b9f73a5ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 8,
      titulo: "Imagine",
      album: "Imagine",
      img: "https://images.unsplash.com/photo-1693835843843-82f691094f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 9,
      titulo: "Billie Jean",
      album: "Thriller",
      img: "https://images.unsplash.com/photo-1561505445-3d89277edf4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 10,
      titulo: "Bohemian Rhapsody",
      album: "A Night at the Opera",
      img: "https://images.unsplash.com/photo-1688302231150-f1d390ac872f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3OHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 11,
      titulo: "Billie Jean",
      album: "Thriller",
      img: "https://images.unsplash.com/photo-1693724315464-781ede3a4767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 12,
      titulo: "Let It Be",
      album: "Let It Be",
      img: "https://images.unsplash.com/photo-1692789183372-1b4b9f73a5ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 13,
      titulo: "Imagine",
      album: "Imagine",
      img: "https://images.unsplash.com/photo-1693835843843-82f691094f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 14,
      titulo: "Billie Jean",
      album: "Thriller",
      img: "https://images.unsplash.com/photo-1561505445-3d89277edf4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 15,
      titulo: "Bohemian Rhapsody",
      album: "A Night at the Opera",
      img: "https://images.unsplash.com/photo-1688302231150-f1d390ac872f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3OHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const witdh = Dimensions.get("window").width;
  // const height = Dimensions.get("window").height;
  const ANCHO_CONTENEDOR = witdh * 0.7;
  const ESPACIO = 10;
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1, marginTop: 8 }}>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        contentContainerStyle={{
          paddingTop: 40,
          paddingHorizontal: 62,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        snapToInterval={ANCHO_CONTENEDOR}
        data={images}
        // key={({ item }) => item.id}
        keyExtractor={(item) => item.id}
        // estimatedItemSize={200}
        // scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ANCHO_CONTENEDOR + 100,
            index * ANCHO_CONTENEDOR,
            (index + 1) * ANCHO_CONTENEDOR,
          ];

          const scrollY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0],
          });

          return (
            <View
              style={{
                width: ANCHO_CONTENEDOR,
                height: "100%",
              }}
            >
              <Animated.View
                key={index}
                style={{
                  paddingVertical: 15,
                  marginHorizontal: ESPACIO,
                  borderRadius: 35,
                  alignItems: "center",
                  paddingHorizontal: 10,
                  transform: [{ translateY: scrollY }],
                  // backgroundColor: "red",
                }}
              >
                <ImageBackground
                  source={{ uri: item.img }}
                  resizeMode="cover"
                  style={styles.posterImage}
                  imageStyle={{ borderRadius: 24 }}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity>
                      <Icon
                        bg="pink600"
                        p={20}
                        rounded="circle"
                        name="play"
                        color="white"
                        fontSize="xl"
                        fontFamily="Ionicons"
                      />
                    </TouchableOpacity>
                  </View>
                </ImageBackground>

                <Text style={{ fontWeight: "bold" }}>{item.titulo}</Text>
                <Text style={{ color: "gray" }}>{item.album}</Text>
              </Animated.View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  posterImage: {
    width: "95%",
    height: 280,
    margin: 0,
    marginBottom: 10,
    // borderRadius: 24,
    resizeMode: "cover",
  },
});

export { Carulsel };
