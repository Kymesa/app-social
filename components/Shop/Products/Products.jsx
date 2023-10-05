import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React, { useContext, useEffect, useState } from "react";
import ProductsData from "./productsData";
import ProductCard from "./ProductCard";
import Modal from "react-native-modal";
import { Button, Icon, Image } from "react-native-magnus";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from "react-native-alert-notification";
import { ModalCartContext } from "../contexts/ModalCartContext";
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
  const [cardProducts, setCardProducts] = useState([]);
  const [modalCart, setModalCart] = useContext(ModalCartContext);
  const [sumTotals, setSumTotals] = useState(0);
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

  useEffect(() => {
    const sumTotal = cardProducts.reduce((a, b) => a + b.price, 0);
    setSumTotals(sumTotal);
  }, [cardProducts]);

  const handleCartAddProduct = (productAddCard) => {
    setCardProducts([productAddCard, ...cardProducts]);
    Dialog.show({
      type: ALERT_TYPE.SUCCESS,
      title: "Success",
      textBody: "Congrats! this is dialog box success",
      button: "close",
      autoClose: 1000,
    });
  };
  // const handleClearCard = () => {
  //   setCardProducts([]);
  // };
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
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 17,
                  fontWeight: "800",
                  marginTop: 15,
                }}
              >
                Descripcion del producto
              </Text>
              <Text
                style={{
                  marginHorizontal: wp(6),
                  fontWeight: "600",
                  fontSize: 15,
                  lineHeight: 25,
                }}
              >
                {"\n"} ✅ Lorem ipsum dolor sit amet consectetur adipisicing .
                {"\n"} ✅ Illo molestiae, blanditiis ea quos laborum nemo beatae
                .{"\n"} ✅ voluptatem asperiores ipsam saepe recusandae. {"\n"}{" "}
                ✅ quas quia necessitatibus suscipit placeat.
              </Text>
              <View
                style={{
                  position: "absolute",
                  bottom: hp(8),
                  alignSelf: "center",
                }}
              >
                <AlertNotificationRoot theme="light" dialogConfig={"autoClose"}>
                  <Button
                    onPress={() => handleCartAddProduct(productSelectModal)}
                    bg="#28D885"
                    color="white"
                    fontWeight="bold"
                    suffix={
                      <Icon
                        name="cart-plus"
                        ml="md"
                        color="white"
                        fontFamily="FontAwesome"
                        fontSize={20}
                      />
                    }
                  >
                    Add Cart
                  </Button>
                </AlertNotificationRoot>
              </View>
            </View>
          </Modal>
        </View>
      )}
      <View style={{ flex: 1 }}>
        <Modal
          animationIn={"fadeInUp"}
          isVisible={modalCart}
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
                onPress={() => setModalCart(!modalCart)}
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
              <Text style={{ fontSize: 22, fontWeight: "800", marginTop: 8 }}>
                Cart
              </Text>
            </View>
            {cardProducts.length >= 1 ? (
              cardProducts.map((p, inx) => (
                <View key={`products-${inx}`}>
                  <Text
                    style={{
                      marginTop: 45,
                      fontWeight: "bold",
                      fontSize: 19,
                    }}
                  >
                    {p.name}
                  </Text>
                </View>
              ))
            ) : (
              <Text style={{ marginTop: 45, fontWeight: "bold", fontSize: 19 }}>
                No hay productos en el carrito
              </Text>
            )}

            <Text>TOTAL PRODUCTS: {sumTotals}</Text>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default Products;
