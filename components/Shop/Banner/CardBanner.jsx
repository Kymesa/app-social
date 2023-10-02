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
        // m={10}
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
    // borderRadius: 8,
    width: wp(100),
    marginTop: 15,
    // paddingBottom: 40,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.29,
    // shadowRadius: 80,
    // elevation: 7,
  },
});

export default CardBanner;
