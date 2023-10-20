import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-magnus";
import { router } from "expo-router";

const BtnHeaderMaps = () => {
  return (
    <TouchableOpacity onPress={() => router.push("/")}>
      <Icon
        name="chevron-back"
        fontFamily="Ionicons"
        fontSize={32}
        color="black"
        mt={30}
        ml={20}
        h={40}
        w={40}
        rounded="md"
      />
    </TouchableOpacity>
  );
};

export default BtnHeaderMaps;
