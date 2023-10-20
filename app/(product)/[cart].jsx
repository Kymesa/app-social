import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native-virtualized-view";
import { Div, Icon } from "react-native-magnus";
import Modal from "react-native-modal";
import SubTotal from "./components/SubTotal";
const cardProduct = () => {
  const { cart, sumTotals } = useLocalSearchParams();
  const [cartCheckout, setCartCheckout] = useState(null);
  const [isPay, setIsPay] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const [b, setB] = useState(false);
  const [c, setC] = useState(false);
  const [d, setD] = useState(false);
  const [e, setE] = useState(false);
  const [i, setI] = useState(false);
  useEffect(() => {
    const cartParce = JSON.parse(cart);
    setCartCheckout(cartParce);
  }, [cart]);

  useEffect(() => {
    setModalVisible(!isModalVisible);
    setTimeout(() => {
      setModalVisible(!isModalVisible);
      setIsPay(true);
    }, 8000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setB(!b);
      setTimeout(() => {
        setC(!c);
        setTimeout(() => {
          setD(!d);
          setTimeout(() => {
            setE(!e);
            setTimeout(() => {
              setI(!i);
            }, 8000);
          }, 8000);
        }, 8000);
      }, 8000);
    }, 8000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {isPay ? (
        <>
          {i ? (
            <View
              style={{
                position: "absolute",
                width: wp(100),
                height: hp(100),
              }}
            >
              <ConfettiCannon
                count={300}
                origin={{ x: -20, y: 0 }}
                explosionSpeed={500}
                fadeOut={true}
              />
            </View>
          ) : null}
          <ScrollView>
            <View
              style={{
                marginTop: 10,
                marginHorizontal: wp(6),
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity onPress={() => router.push("/(tabs)/Shop")}>
                <Icon
                  name="arrow-back-ios"
                  color="black"
                  fontSize={30}
                  fontFamily="MaterialIcons"
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Order Tracker
              </Text>
              <Icon name="cog" color="black" fontSize={1} fontFamily="Entypo" />
            </View>
            <View style={{ marginLeft: 15 }}>
              <Text
                style={{
                  color: "black",
                  fontWeight: "300",
                  marginTop: 15,
                  fontSize: 15,
                }}
              >
                {new Date().toUTCString()}
              </Text>

              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginRight: 15,
                }}
              >
                <Text style={{ fontWeight: "800", fontSize: 15 }}>
                  Order ID: # {Math.floor(Math.random() * 1000000)}
                </Text>
                <Text>
                  Amt:{" "}
                  <Text style={{ fontWeight: "800", fontSize: 15 }}>
                    ${sumTotals}
                  </Text>
                </Text>
              </View>
              <View style={{ alignItems: "center", marginRight: 15 }}>
                <View
                  style={{
                    marginTop: 20,
                    borderWidth: 1,
                    width: wp(92),
                    borderColor: "#e0dada",
                  }}
                ></View>
                <View
                  style={{
                    marginTop: 20,
                    width: wp(92),
                    height: hp(50),
                    backgroundColor: "#F6F6F8",
                    borderRadius: 20,
                  }}
                >
                  <View style={{ marginLeft: 30, marginTop: 15 }}>
                    <Text
                      style={{
                        fontWeight: "900",
                        fontSize: 19,
                      }}
                    >
                      Order Journey
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 16,
                      }}
                    >
                      <Div
                        h={45}
                        w={45}
                        bg={"#13293B"}
                        rounded={100}
                        shadow="xl"
                      >
                        <Icon
                          alignSelf="center"
                          mt={8.5}
                          name="check"
                          color="white"
                          fontSize={25}
                          fontFamily="Feather"
                        />
                      </Div>
                      <View
                        style={{
                          position: "absolute",
                          top: 50,
                          left: 20,
                          height: 20,
                          width: 1.5,
                          backgroundColor: "#13293B",
                        }}
                      ></View>
                      <View style={{ marginLeft: 15 }}>
                        <Text style={{ fontWeight: "700", fontSize: 16 }}>
                          Order Information Received
                        </Text>
                        <Text> {new Date().toLocaleDateString()}</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 28,
                      }}
                    >
                      <Div
                        h={45}
                        w={45}
                        bg={c ? "#13293B" : "white"}
                        rounded={100}
                        shadow="xl"
                      >
                        <Icon
                          alignSelf="center"
                          mt={8.5}
                          name="check"
                          color="white"
                          fontSize={25}
                          fontFamily="Feather"
                        />
                      </Div>
                      <View
                        style={{
                          position: "absolute",
                          top: 50,
                          left: 20,
                          height: 20,
                          width: 1.5,
                          backgroundColor: "#13293B",
                        }}
                      ></View>
                      <View style={{ marginLeft: 15 }}>
                        <Text style={{ fontWeight: "700", fontSize: 16 }}>
                          Order Information Received
                        </Text>
                        <Text> {new Date().toLocaleDateString()}</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 28,
                      }}
                    >
                      <Div
                        h={45}
                        w={45}
                        bg={d ? "#13293B" : "white"}
                        rounded={100}
                        shadow="xl"
                      >
                        <Icon
                          alignSelf="center"
                          mt={8.5}
                          name="check"
                          color="white"
                          fontSize={25}
                          fontFamily="Feather"
                        />
                      </Div>
                      <View
                        style={{
                          position: "absolute",
                          top: 50,
                          left: 20,
                          height: 20,
                          width: 1.5,
                          backgroundColor: "#13293B",
                        }}
                      ></View>
                      <View style={{ marginLeft: 15 }}>
                        <Text style={{ fontWeight: "700", fontSize: 16 }}>
                          Order Information Received
                        </Text>
                        <Text> {new Date().toLocaleDateString()}</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 28,
                      }}
                    >
                      <Div
                        h={45}
                        w={45}
                        bg={e ? "#13293B" : "white"}
                        rounded={100}
                        shadow="xl"
                      >
                        <Icon
                          alignSelf="center"
                          mt={8.5}
                          name="check"
                          color="white"
                          fontSize={25}
                          fontFamily="Feather"
                        />
                      </Div>
                      <View
                        style={{
                          position: "absolute",
                          top: 50,
                          left: 20,
                          height: 20,
                          width: 1.5,
                          backgroundColor: "#13293B",
                        }}
                      ></View>
                      <View style={{ marginLeft: 15 }}>
                        <Text style={{ fontWeight: "700", fontSize: 16 }}>
                          Order Information Received
                        </Text>
                        <Text> {new Date().toLocaleDateString()}</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 28,
                      }}
                    >
                      <Div
                        h={45}
                        w={45}
                        bg={i ? "#13293B" : "white"}
                        rounded={100}
                        shadow="xl"
                      >
                        <Icon
                          alignSelf="center"
                          mt={8.5}
                          name="check"
                          color="white"
                          fontSize={25}
                          fontFamily="Feather"
                        />
                      </Div>
                      <View style={{ marginLeft: 15 }}>
                        <Text style={{ fontWeight: "700", fontSize: 16 }}>
                          Recibido {i ? "" : null}
                        </Text>
                        <Text> {new Date().toLocaleDateString()}</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    marginTop: 20,
                    width: wp(92),
                    height: hp(28),
                    backgroundColor: "#F6F6F8",
                    borderRadius: 20,
                  }}
                >
                  <SubTotal name="Sub Total" total={sumTotals} />
                  <SubTotal name="Shipping Charge" total="0.0" />
                  <SubTotal name="Discount(10%)" total="0.0" />
                  <View style={{ alignSelf: "center", marginRight: 1 }}>
                    <View
                      style={{
                        marginTop: 20,
                        borderWidth: 1,
                        width: wp(80),
                        marginHorizontal: 20,
                        borderColor: "#e0dada",
                      }}
                    ></View>
                  </View>
                  <SubTotal name="Total Amount " total={sumTotals} />
                </View>
              </View>
            </View>
          </ScrollView>
        </>
      ) : (
        <View style={{ flex: 1 }}>
          <Modal
            isVisible={isModalVisible}
            animationIn={"fadeInUp"}
            style={{
              backgroundColor: "white",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              position: "absolute",
              margin: 2,
              bottom: 0,
              height: hp(30),
              width: wp(100),
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "800",
                  fontSize: 20,
                  marginTop: 10,
                }}
              >
                Procesando Tu Pago...
              </Text>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 25,
                }}
              >
                <ActivityIndicator size={"large"} />
                <Image
                  style={{ width: 100, height: 100 }}
                  source={require("../../assets/animation_lnfbykbi_small.gif")}
                />
              </View>
            </View>
          </Modal>
        </View>
      )}
    </SafeAreaView>
  );
};

export default cardProduct;
