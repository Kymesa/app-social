import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
const categoriesList = [
  "Laptops",
  "Smartphones",
  "watchs",
  "Smart Watch",
  "Apple",
  "Cars",
];
const Categories = () => {
  const [selectCategories, setSelectCategories] = useState(categoriesList[0]);
  return (
    <View style={{ marginTop: 18 }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={categoriesList}
        key={(categoriesList) => categoriesList}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectCategories(item)}>
            <View
              style={{
                backgroundColor:
                  selectCategories == item ? "#0D1F2D" : "#F6F6F8",
                padding: 9,
                marginRight: 12,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: selectCategories == item ? "white" : "black",
                  fontWeight: "bold",
                }}
              >
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Categories;
