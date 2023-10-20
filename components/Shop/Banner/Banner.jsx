import { View } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import CardBanner from "./CardBanner";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import data from "./dataBanners";
const Banner = () => {
  const isCarousel = React.useRef(null);
  return (
    <View>
      <Carousel
        layout="tinder"
        ref={isCarousel}
        data={data}
        renderItem={CardBanner}
        sliderWidth={wp(100)}
        itemWidth={wp(100)}
        useScrollView={true}
      />
    </View>
  );
};

export default Banner;
