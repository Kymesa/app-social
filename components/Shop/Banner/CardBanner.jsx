import { View, StyleSheet } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "react-native-magnus";
const CardBanner = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        resizeMode="contain"
        h={hp(20)}
        w={wp(90)}
        rounded={22}
        source={{
          uri: item.imgBanner,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: wp(100),
    marginTop: 15,
  },
});

export default CardBanner;
