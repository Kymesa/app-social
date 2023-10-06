import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Button,
  ActivityIndicator,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native-virtualized-view";
import { Icon } from "react-native-magnus";
import Modal from "react-native-modal";
const cardProduct = () => {
  const { cart, sumTotals } = useLocalSearchParams();
  const [cartCheckout, setCartCheckout] = useState(null);
  const [isPay, setIsPay] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {isPay ? (
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
            {/* {cartCheckout?.map((p) => (
            <View key={p.id}>
              <Text>{p.name}</Text>
            </View>
          ))}
          <Text>{sumTotals}</Text> */}
          </View>
        </ScrollView>
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
              height: hp(50),
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
              </View>
            </View>
          </Modal>
        </View>
      )}
    </SafeAreaView>
  );
};

export default cardProduct;
