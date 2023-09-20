import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Icon, Image } from "react-native-magnus";

const CardPost = ({ name, descripcion, date, urlPost, urlPerfil }) => {
  const [love, setLove] = useState(false);
  const handleClickLike = () => {
    setLove(!love);
  };
  return (
    <View style={{ marginBottom: 15 }}>
      <View
        style={{
          marginLeft: 15,
          marginTop: 18,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View style={{ marginRight: 15 }}>
          <Image
            h={55}
            w={55}
            rounded="circle"
            source={{
              uri: urlPerfil,
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: "bold", fontSize: 15, marginBottom: 5 }}>
            {name}
          </Text>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                color: date == "Now" ? "blue" : "gray",
                fontSize: 12,
                marginRight: 5,
              }}
            >
              {date}
            </Text>
            <Icon
              bg="white"
              rounded="circle"
              name="location-pin"
              color="gray"
              fontSize="xl"
              fontFamily="MaterialIcons"
            />
            <Text style={{ color: "gray", fontSize: 12 }}>Office</Text>
          </View>
        </View>
        <View>
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
      </View>
      <Text style={{ marginHorizontal: 10, marginLeft: 15 }}>
        {descripcion}
        {/* <Text style={{ color: "blue" }}> https://www.ejemplo.com</Text> */}
      </Text>
      <View>
        <Image
          resizeMode="cover"
          style={{ width: "100%", height: 300 }}
          source={{
            uri: urlPost,
          }}
        />
      </View>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          marginHorizontal: 20,
          marginVertical: 10,
        }}
      >
        <View
          style={{
            alignContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={handleClickLike}>
            <Icon
              mr={5}
              name="heart"
              color={love ? "red500" : "gray500"}
              fontSize="5xl"
              fontFamily="AntDesign"
            />
          </TouchableOpacity>

          <Text style={{ color: "gray" }}>2056</Text>
        </View>
        <View
          style={{
            alignContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Icon
            name="comment"
            color="gray500"
            fontSize="5xl"
            fontFamily="FontAwesome"
          />

          <Text style={{ color: "gray", marginLeft: 10 }}>645</Text>
        </View>
        <View
          style={{
            alignContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Icon
            mr={5}
            name="share"
            color="gray500"
            fontSize="5xl"
            fontFamily="FontAwesome"
          />
          <Text style={{ color: "gray" }}>347</Text>
        </View>
      </View>
    </View>
  );
};
export default CardPost;
