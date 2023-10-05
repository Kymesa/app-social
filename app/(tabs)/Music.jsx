import React from "react";
import { Carulsel } from "../../components/MusicApp/Carulsel";
import { Played } from "../../components/MusicApp/Played";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { Tabs } from "expo-router";
import BtnHeaderScreen from "../../components/BtnHeader/BtnHeaderScreen";
import { Icon } from "react-native-magnus";
export default function Music() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Carulsel />
          <Played />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
