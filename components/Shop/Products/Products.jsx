import { View, Text, FlatList, TouchableOpacity, Button } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React, { useEffect, useState } from "react";
import ProductsData from "./productsData";
import ProductCard from "./ProductCard";
import Modal from "react-native-modal";
import { Icon, Image } from "react-native-magnus";
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
  const [isModalVisible, setModalVisible] = useState(false);
  const [productSelectModal, setProductSeleteModal] = useState(null);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  useEffect(() => {
    const filterSelect = () => {
      const filterProducts = ProductsData.filter(
        (p) => p.categoty == selectCategories
      );

      setListDataCategories(filterProducts);
    };
    filterSelect();
  }, [selectCategories]);

  const eventProductSelect = (item) => {
    setModalVisible(true);
    setProductSeleteModal(item);
  };

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

      {listDataCategories && (
        <View style={{ width: wp(92) }}>
          <FlatList
            data={listDataCategories}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            key={(listDataCategories) => listDataCategories.id}
            renderItem={({ item }) => (
              <ProductCard product={item} eventProduct={eventProductSelect} />
            )}
          />
        </View>
      )}

      {productSelectModal && (
        <View style={{ flex: 1 }}>
          <Modal
            animationIn={"fadeInUp"}
            isVisible={isModalVisible}
            style={{
              backgroundColor: "white",
              borderRadius: 20,
            }}
          >
            <View style={{ flex: 1 }}>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  style={{ position: "absolute", left: 10, top: 8 }}
                  onPress={() => setModalVisible(!isModalVisible)}
                >
                  <Icon
                    name="close"
                    color="black"
                    fontSize={20}
                    fontFamily="AntDesign"
                    bg="gray300"
                    p={7}
                    rounded={"circle"}
                  />
                </TouchableOpacity>

                <Text
                  style={{ marginTop: 12, fontWeight: "bold", fontSize: 19 }}
                >
                  {productSelectModal.name}
                </Text>
              </View>
              <Image
                mt={40}
                alignSelf="center"
                h={"20%"}
                w={"60%"}
                m={10}
                rounded={20}
                resizeMode="contain"
                source={{
                  uri: productSelectModal.imgUrl,
                }}
              />
              <Text
                style={{
                  marginLeft: 15,
                  fontWeight: "800",
                  fontSize: 21,
                  marginTop: 22,
                }}
              >
                {productSelectModal.name}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{
                    marginLeft: 15,
                    fontWeight: "bold",
                    fontSize: 17,
                    marginTop: 12,
                  }}
                >
                  ${productSelectModal.price}
                </Text>
                <Text
                  style={{
                    marginLeft: 9,
                    fontWeight: "400",
                    fontSize: 14,
                    marginTop: 12,
                    textDecorationLine: "line-through",
                  }}
                >
                  ${"10.000"}
                </Text>
              </View>
            </View>
          </Modal>
        </View>
      )}
    </>
  );
};

export default Products;
