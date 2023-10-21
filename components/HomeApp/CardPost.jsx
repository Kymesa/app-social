import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image as Img,
} from "react-native";
import { Icon, Image } from "react-native-magnus";
import React, { useCallback, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import LottieView from "lottie-react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
const CardPost = ({
  name,
  descripcion,
  date,
  urlPost,
  urlPerfil,
  like,
  datas,
}) => {
  const ImageComponen = Animated.createAnimatedComponent(Img);
  const [love, setLove] = useState(false);
  const scale = useSharedValue(0);
  const onDoubleTap = useCallback(() => {
    scale.value = withSpring(1, { duration: 500 }, (finish) => {
      if (finish) {
        scale.value = withSpring(0);
      }
    });
  }, []);
  const animatedStyleHeart = useAnimatedStyle(() => {
    return { transform: [{ scale: Math.max(scale.value, 0) }] };
  });

  const handleClickLike = () => {
    setLove(!love);
  };

  const doubleTap = Gesture.Tap()
    .maxDuration(250)
    .numberOfTaps(2)
    .onStart(onDoubleTap)
    .onEnd(
      useCallback(() => {
        setLove(true);
      })
    );
  return (
    <>
      <View style={{ marginBottom: 15, scaleY: -1 }}>
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
        <Text
          style={{
            marginVertical: 10,
            width: "80%",
            marginHorizontal: 20,
            lineHeight: 25,
          }}
        >
          {descripcion}
        </Text>
        <View>
          <GestureDetector gesture={doubleTap}>
            <Animated.View style={{ flex: 1 }}>
              <ImageBackground
                resizeMode="cover"
                style={{
                  width: "100%",
                  height: 300,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                source={{
                  uri: urlPost,
                }}
              >
                <ImageComponen
                  style={[
                    { shadowOpacity: 0.35, borderRadius: 35 },
                    animatedStyleHeart,
                  ]}
                  tintColor={"white"}
                  source={require("../../assets/heartins.png")}
                />
              </ImageBackground>
            </Animated.View>
          </GestureDetector>
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
            <TouchableOpacity onPress={() => handleClickLike()}>
              <Icon
                mr={5}
                name="heart"
                color={love ? "red500" : "gray500"}
                fontSize="5xl"
                fontFamily="AntDesign"
              />
            </TouchableOpacity>

            <Text style={{ color: "gray" }}>{like}</Text>
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
    </>
  );
};
export default CardPost;
