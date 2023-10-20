import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import GestureRecognizer from "react-native-swipe-gestures";
import { ScrollView } from "react-native-virtualized-view";
import Modal from "react-native-modal";
import { Div, Icon, Image } from "react-native-magnus";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Link } from "expo-router";
const ProductsCarts = ({
  modalCart,
  setModalCart,
  cardProducts,
  handleClearCard,
  sumTotals,
}) => {
  return (
    <>
      <GestureRecognizer
        style={{ flex: 1 }}
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
                          marginHorizontal: wp(10),
                          width: wp(80),

                          backgroundColor: "#FFFFFF",
                          borderRadius: 20,

                          flexDirection: "row",
                        }}
                      >
                        <Image
                          resizeMode="contain"
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

export default ProductsCarts;
