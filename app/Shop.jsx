import { SafeAreaView, ScrollView } from "react-native";
import React from "react";
import InputSearch from "../components/Shop/InputSearch";
export default function Peoples() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <InputSearch />
      </ScrollView>
    </SafeAreaView>
  );
}
