import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import ProductsData from "./productsData";
const categoriesList = [
  "Smartphones",
  "Laptops",
  "watchs",
  "Smart Watch",
  "Apple",
  "Cars",
];
const Products = () => {
  const [selectCategories, setSelectCategories] = useState(categoriesList[0]);
  const [listDataCategories, setListDataCategories] = useState(null);

  useEffect(() => {
    const filterSelect = () => {
      const filterProducts = ProductsData.filter(
        (p) => p.categoty == selectCategories
      );
      setListDataCategories(filterProducts);
    };
    filterSelect();
  }, [selectCategories]);

  console.log(listDataCategories);

  return (
    <>
      <View style={{ marginTop: 18 }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={categoriesList}
          key={(categoriesList) => categoriesList}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity onPressIn={() => setSelectCategories(item)}>
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

      {listDataCategories &&
        listDataCategories.map((p) => (
          <View key={p.id}>
            <Text>{p.name}</Text>
          </View>
        ))}
    </>
  );
};

export default Products;
