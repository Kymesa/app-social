import { SafeAreaView, ScrollView } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import InputSearch from "../components/Shop/InputSearch/InputSearch";
import Banner from "../components/Shop/Banner/Banner";
import Categories from "../components/Shop/Category/Categories";
import Products from "../components/Shop/Products/Products";
export default function Peoples() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        style={{ marginHorizontal: wp(4) }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <InputSearch />
        <Banner />
        <Categories />
        <Products />
      </ScrollView>
    </SafeAreaView>
  );
}
