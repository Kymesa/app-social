import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MapView, {
  Callout,
  Circle,
  Marker,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import * as Location from "expo-location";
import { Icon, Image, Input } from "react-native-magnus";
import {
  FlatList,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { DoctorsDB } from "../components/Maps/DoctorsDB";
import { StoreDB } from "../components/Maps/StoreDB";
import { EngginersDB } from "../components/Maps/Enginners";
export default function Maps() {
  const dataName = [
    {
      name: "Store",
      iconName: "store-alt",
      iconFamly: "FontAwesome5",
    },
    {
      name: "Doctors",
      iconName: "doctor",
      iconFamly: "MaterialCommunityIcons",
    },
    {
      name: "Engginers",
      iconName: "engineering",
      iconFamly: "MaterialIcons",
    },
    {
      name: "Services",
      iconName: "monetization-on",
      iconFamly: "MaterialIcons",
    },
    {
      name: "World",
      iconName: "globe-americas",
      iconFamly: "FontAwesome5",
    },
  ];

  const [initialRegion, setInitialRegion] = useState(null);
  const [markers, setMarkers] = useState(null);
  const [inputText, setInputText] = useState("");
  const [doctors, setDoctors] = useState(false);
  const [stores, setStore] = useState(false);
  const [enginners, setEnginners] = useState(false);
  const styleMap = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5",
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#f5f5f5",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#bdbdbd",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#eeeeee",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#e5e5e5",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#dadada",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [
        {
          color: "#e5e5e5",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#eeeeee",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#c9c9c9",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
  ];

  async function getLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync({});
    if (status !== "granted") {
      alert("Permission to access location was denied");
      return;
    }
    // setInitialRegion({
    //   latitude: 10.476713507755939,
    //   longitude: -73.24236273765565,
    //   latitudeDelta: 0.03,
    //   longitudeDelta: 0.03,
    // });
    // setMarkers({
    //   latitude: 10.476713507755939,
    //   longitude: -73.24236273765565,
    // });

    let locationGet = await Location.getCurrentPositionAsync({});
    setInitialRegion({
      latitude: locationGet.coords.latitude,
      longitude: locationGet.coords.longitude,
      latitudeDelta: 0.025,
      longitudeDelta: 0.025,
    });
    setMarkers({
      latitude: locationGet.coords.latitude,
      longitude: locationGet.coords.longitude,
    });

    // if (locationGet == null) {
    //   setInitialRegion({
    //     latitude: 16.852437466660895,
    //     longitude: -99.91198539733888,
    //     latitudeDelta: 0.04,
    //     longitudeDelta: 0.04,
    //   });
    //   setMarkers({
    //     latitude: 16.852437466660895,
    //     longitude: -99.91198539733888,
    //   });
    // } else {
    //   setInitialRegion({
    //     latitude: locationGet.coords.latitude,
    //     longitude: locationGet.coords.longitude,
    //     latitudeDelta: 0.04,
    //     longitudeDelta: 0.04,
    //   });
    //   setMarkers({
    //     latitude: locationGet.coords.latitude,
    //     longitude: locationGet.coords.longitude,
    //   });
    // }
  }
  useEffect(() => {
    getLocation();
  }, []);
  const handleCheck = (item) => {
    if (doctors | stores | enginners) {
      setDoctors(false);
      setStore(false);
      setEnginners(false);
    }
    switch (item) {
      case "Doctors":
        setDoctors(!doctors);
        break;
      case "Store":
        setStore(!stores);
        break;
      case "Engginers":
        setEnginners(!enginners);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        {initialRegion && markers && (
          <>
            <MapView
              customMapStyle={styleMap}
              showsCompass={false}
              loadingIndicatorColor="red"
              loadingEnabled={true}
              provider={PROVIDER_GOOGLE}
              initialRegion={initialRegion}
              style={{ width: wp(100), height: hp(100) }}
            >
              <Circle
                center={markers}
                radius={8}
                strokeWidth={5}
                strokeColor="tomato"
              />
              <Marker coordinate={markers} title="I'm Here" />
              {doctors &&
                DoctorsDB.map((m, i) => (
                  <Marker
                    key={i}
                    coordinate={m.cordinate}
                    title={m.title}
                    image={{ uri: m.imgUrl }}
                  />
                ))}
              {stores &&
                StoreDB.map((m, i) => (
                  <Marker
                    key={i}
                    coordinate={m.cordinate}
                    title={m.title}
                    image={{ uri: m.imgUrl }}
                  />
                ))}
              {enginners &&
                EngginersDB.map((m, i) => (
                  <Marker
                    key={i}
                    coordinate={m.cordinate}
                    title={m.title}
                    image={{ uri: m.imgUrl }}
                  />
                ))}
            </MapView>
            <View
              style={{
                position: "absolute",
                width: wp(100),
                marginTop: hp(12),
                paddingHorizontal: 20,
              }}
            >
              <Input
                onChangeText={(newText) => setInputText(newText)}
                rounded={15}
                placeholder="Type Location you want"
                fontSize={15}
                // p={2}
                focusBorderColor="blue700"
                suffix={
                  <TouchableOpacity onPress={() => alert(inputText)}>
                    <Icon
                      fontSize={20}
                      name="search"
                      color="gray900"
                      fontFamily="Feather"
                    />
                  </TouchableOpacity>
                }
              />
            </View>
            <View
              style={{
                position: "absolute",
                width: wp(90),
                marginTop: hp(21),
                marginHorizontal: 20,
              }}
            >
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={dataName}
                key={(dataName) => dataName}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => handleCheck(item.name)}
                    style={{
                      backgroundColor: "#1B2736",
                      marginHorizontal: 5,
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 10,
                      padding: 6,
                    }}
                  >
                    <Icon
                      name={item.iconName}
                      color="white"
                      fontSize={22}
                      mr={10}
                      ml={10}
                      fontFamily={item.iconFamly}
                    />
                    <Text style={{ fontWeight: "bold", color: "white" }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </>
        )}
      </View>
    </>
  );
}
