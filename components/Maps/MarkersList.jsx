import { View, Text } from "react-native";
import React from "react";

const MarkersList = () => {
  return (
    <Marker
      key={i}
      coordinate={m.cordinate}
      title={m.title}
      image={{ uri: m.imgUrl }}
    />
  );
};

export default MarkersList;
