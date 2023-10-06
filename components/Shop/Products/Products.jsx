import { View, Text, FlatList, TouchableOpacity } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React, { useContext, useEffect, useState } from "react";
import ProductsData from "./productsData";
import ProductCard from "./ProductCard";
import Modal from "react-native-modal";
import { Button, Div, Icon, Image } from "react-native-magnus";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from "react-native-alert-notification";
import { ModalCartContext } from "../contexts/ModalCartContext";
import { Link, router } from "expo-router";
import { ScrollView } from "react-native-virtualized-view";
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
  const [modalCart, setModalCart, countCart, setCountCart] =
    useContext(ModalCartContext);
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
    Dialog.show({
      type: ALERT_TYPE.SUCCESS,
      title: productAddCard.name,
      textBody: "Producto agregado al carrito, Con exito!",
      button: "close",
      autoClose: 8000,
    });
    setTimeout(() => {
      setCardProducts([...cardProducts, productAddCard]);
      setCountCart(countCart + 1);
      setModalVisible(!isModalVisible);
    }, 1000);
  };
  const handleClearCard = () => {
    setCardProducts([]);
    setCountCart(0);
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
            // statusBarTranslucent={true}

            animationIn={"fadeInUp"}
            isVisible={isModalVisible}
            style={{
              backgroundColor: "white",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              margin: 0,
              marginTop: 20,
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
                  marginHorizontal: wp(4),
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
      <GestureRecognizer
        style={{ flex: 1 }}
        // onSwipeUp={() => setModalCart(true)}
        onSwipeDown={() => setModalCart(!modalCart)}
      >
        <View style={{ flex: 1 }}>
          <Modal
            animationIn={"fadeInUp"}
            isVisible={modalCart}
            style={{
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              margin: 0,
              marginTop: 20,
              backgroundColor: "#F6F7FD",
            }}
          >
            <View style={{ flex: 1 }}>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  marginBottom: 25,
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
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: "800",
                    marginTop: 8,
                  }}
                >
                  My Cart
                </Text>
                <View
                  style={{
                    position: "absolute",
                    top: 40,
                    height: 2,
                    width: "14%",
                    backgroundColor: "black",
                  }}
                ></View>
                <TouchableOpacity
                  disabled={cardProducts.length >= 1 ? false : true}
                  onPress={() => handleClearCard()}
                  style={{ position: "absolute", right: 10, top: 5 }}
                >
                  <Icon
                    name="cart-remove"
                    color="black"
                    fontSize={28}
                    fontFamily="MaterialCommunityIcons"
                    p={7}
                  />
                </TouchableOpacity>
              </View>
              {cardProducts.length >= 1 ? (
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  style={{ marginBottom: 40 }}
                >
                  {cardProducts.map((p, inx) => (
                    <View key={`products-${inx}`} style={{ marginBottom: 15 }}>
                      <View
                        style={{
                          // marginTop: hp(2),
                          marginHorizontal: wp(10),
                          width: wp(80),

                          backgroundColor: "#FFFFFF",
                          borderRadius: 20,

                          flexDirection: "row",
                        }}
                      >
                        <Image
                          m={10}
                          h={100}
                          w={100}
                          rounded={20}
                          source={{
                            uri: p.imgUrl,
                          }}
                        />
                        <Text
                          style={{
                            marginTop: 15,
                            marginLeft: 7,
                            fontWeight: "bold",
                            fontSize: 18,
                          }}
                        >
                          {p.name}
                        </Text>
                        <View
                          style={{
                            position: "absolute",
                            right: 20,
                            bottom: 10,
                          }}
                        >
                          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                            ${p.price}
                          </Text>
                        </View>
                      </View>
                    </View>
                  ))}
                </ScrollView>
              ) : (
                <>
                  <View>
                    <Image
                      h={250}
                      w={250}
                      m={10}
                      alignSelf="center"
                      rounded="circle"
                      source={require("../../../assets/Nproduct.png")}
                    />
                  </View>
                  <Text
                    style={{
                      marginTop: 45,
                      fontWeight: "bold",
                      fontSize: 22,
                      textAlign: "center",
                    }}
                  >
                    No hay productos en el carrito
                  </Text>
                </>
              )}
            </View>
            <View
              style={{
                marginHorizontal: wp(10),

                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                marginBottom: 15,
              }}
            >
              <View>
                <Text style={{ fontWeight: "400" }}>TOTAL </Text>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                  ${sumTotals}
                </Text>
              </View>
              <Link
                disabled={cardProducts.length <= 0 ? true : false}
                href={{
                  pathname: "/(product)/(cart)",
                  params: {
                    cart: JSON.stringify(cardProducts),
                    sumTotals: sumTotals,
                  },
                }}
              >
                {/* <Pressable
                style={{
                  backgroundColor: "#28D885",
                  padding: 15,
                  borderRadius: 18,
                }}
              > */}
                <Div bg="#28D885" p={15} rounded={18} row alignItems="center">
                  <Text
                    style={{ fontWeight: "bold", fontSize: 15 }}
                    disabled={true}
                  >
                    Pay Now
                  </Text>
                  <Icon
                    name="credit"
                    color="black"
                    fontSize={18}
                    fontFamily="Entypo"
                  />
                </Div>
              </Link>
            </View>
          </Modal>
        </View>
      </GestureRecognizer>
    </>
  );
};

export default Products;
