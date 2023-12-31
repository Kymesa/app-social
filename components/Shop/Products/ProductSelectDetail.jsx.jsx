import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { Button, Div, Icon, Image } from "react-native-magnus";
import { AlertNotificationRoot } from "react-native-alert-notification";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import GestureRecognizer from "react-native-swipe-gestures";
const ProductModalDetails = ({
  productSelectModal,
  isModalVisible,
  setModalVisible,
  handleCartAddProduct,
}) => {
  return (
    <>
      <GestureRecognizer
        style={{ flex: 1 }}
        onSwipeDown={() => setModalVisible(!isModalVisible)}
      >
        {productSelectModal && (
          <View style={{ flex: 1 }}>
            <Modal
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
                  h={"30%"}
                  w={"80%"}
                  rounded={10}
                  resizeMode="contain"
                  source={{
                    uri: productSelectModal.imgUrl,
                  }}
                />
                <View
                  style={{
                    marginTop: 30,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      marginLeft: 15,
                      fontWeight: "800",
                      fontSize: 21,
                    }}
                  >
                    {productSelectModal.name}
                  </Text>
                  <Div
                    bg="#FEC6C8"
                    pr={10}
                    p={5}
                    borderStartWidth={5}
                    borderColor="#28D885"
                  >
                    <Text
                      style={{
                        fontWeight: "800",
                        color: "#E18280",
                        fontSize: 14,
                      }}
                    >
                      20% OFF
                    </Text>
                  </Div>
                </View>

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
                  {"\n"} ✅ Illo molestiae, blanditiis ea quos laborum nemo
                  beatae .{"\n"} ✅ voluptatem asperiores ipsam saepe
                  recusandae. {"\n"} ✅ quas quia necessitatibus suscipit
                  placeat.
                </Text>
                <View
                  style={{
                    position: "absolute",
                    bottom: 35,
                    alignSelf: "center",
                  }}
                >
                  <AlertNotificationRoot
                    theme="light"
                    dialogConfig={"autoClose"}
                  >
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
      </GestureRecognizer>
    </>
  );
};

export default ProductModalDetails;
