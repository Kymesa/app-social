import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { Whats } from "../components/Whats";
import { Todo } from "../components/Todo";
export default function Feed() {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView
        style={{ marginHorizontal: 10 }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Whats />
          <Todo />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
