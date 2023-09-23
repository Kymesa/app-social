import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MapView from "react-native-maps";
export default function Maps() {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ width: wp(100), height: hp(100) }}
      />
    </View>
  );
}
// const styles = StyleSheet.create({
//   map: {
//     width: "100%",
//     height: "100%",
//   },
// });
