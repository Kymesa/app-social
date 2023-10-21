import React from "react";
import { Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Image } from "react-native-magnus";
import { SafeAreaView } from "react-native-safe-area-context";

const Maps = () => {
  return (
    <>
      <SafeAreaView>
        <View>
          <Image
            h={150}
            w={150}
            m={10}
            top={hp(10)}
            position="absolute"
            alignSelf="center"
            source={require("../../assets/geo3.png")}
          />
        </View>
      </SafeAreaView>
    </>
  );
};
export default Maps;
