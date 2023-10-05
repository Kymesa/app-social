import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native-virtualized-view";
import { Icon } from "react-native-magnus";

const cardProduct = () => {
  const { cart } = useLocalSearchParams();
  console.log(cart);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: wp(6),
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => router.push("/(tabs)/Shop")}>
            <Icon
              name="arrow-back-ios"
              color="black"
              fontSize="6xl"
              fontFamily="MaterialIcons"
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "black",
            }}
          >
            Cart
          </Text>
          <Icon name="cog" color="black" fontSize="6xl" fontFamily="Entypo" />
        </View>
        <Text
          style={{
            color: "black",
            fontWeight: "bold",
            marginLeft: 15,
            marginTop: 15,
            fontSize: 20,
          }}
        >
          PRODUCTS:
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default cardProduct;
