import { View } from "react-native";
import React from "react";
import { Input, Icon } from "react-native-magnus";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const InputSearch = () => {
  return (
    <View
      style={{
        marginTop: 20,
        flexDirection: "row",
        marginHorizontal: wp(6.5),
        gap: 20,
      }}
    >
      <Input
        w={wp(75)}
        bg="#F6F6F8"
        placeholder="Search Here..."
        p={10}
        focusBorderColor="blue700"
        prefix={
          <Icon
            name="search"
            color="gray"
            fontFamily="Feather"
            fontSize={22}
            mr={5}
          />
        }
      />
      <View style={{ backgroundColor: "#F6F6F8" }}>
        <Icon
          p={5}
          name="sound-mix"
          color="gray900"
          fontFamily="Entypo"
          fontSize={32}
        />
      </View>
    </View>
  );
};

export default InputSearch;
