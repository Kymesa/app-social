// ? RN UTILIZADOS
import React, { useEffect, useRef, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { View, Text, TouchableOpacity } from "react-native";
// ? LIBRERIA PARA OBTENER LA ALTURA Y ANCHO DE LA PANTALLA
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
//? LIBRERIA GOOGLE MAPS REACT NATIVE
import MapView, { Circle, Marker, PROVIDER_GOOGLE } from "react-native-maps";
// ? EXPO LOCATION PERMISOS
import * as Location from "expo-location";
// ? FRAMEWORK CSS MAGNUS
import { Icon, Image, Input } from "react-native-magnus";
// ? DB - DOC - STORE - ENG
import { DoctorsDB } from "../../components/Maps/DB/DoctorsDB";
import { StoreDB } from "../../components/Maps/DB/StoreDB";
import { EngginersDB } from "../../components/Maps/DB/EnginnersDB";
// ? CHECK LISTS
import { checkList } from "../../components/Maps/DB/CheckList";
//? STYLE MAP
import { styleMap } from "../../components/Maps/StyleMap";
import ListCard from "../../components/Maps/ListCard";
import MarkerList from "../../components/Maps/MarkerList";
import { SafeAreaView } from "react-native-safe-area-context";
const Maps = () => {
  // const mapView = useRef(null);
  // const [initialRegion, setInitialRegion] = useState(null);
  // const [markers, setMarkers] = useState(null);
  // const [inputText, setInputText] = useState("");
  // const [doctors, setDoctors] = useState(false);
  // const [stores, setStore] = useState(false);
  // const [enginners, setEnginners] = useState(false);
  // const [arrMarker, setArrMarker] = useState(null);
  // const [refreshing, setRefreshing] = useState(false);

  // const onRefresh = useCallback(() => {
  //   setRefreshing(true)(async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       console.log("HOLIS");
  //       return;
  //     }
  //     let locationGet = await Location.getCurrentPositionAsync({});
  //     setInitialRegion({
  //       latitude: locationGet.coords.latitude,
  //       longitude: locationGet.coords.longitude,
  //       latitudeDelta: 0.03,
  //       longitudeDelta: 0.03,
  //     });
  //     setMarkers({
  //       latitude: locationGet.coords.latitude,
  //       longitude: locationGet.coords.longitude,
  //     });
  //     setRefreshing(false);
  //   })();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       console.log("HOLIS");
  //       return;
  //     }
  // setInitialRegion({
  //   latitude: 37.33548,
  //   longitude: -121.893028,
  //   latitudeDelta: 0.03,
  //   longitudeDelta: 0.03,
  // });
  // setMarkers({
  //   latitude: 37.33548,
  //   longitude: -121.893028,
  // });
  //     let locationGet = await Location.getCurrentPositionAsync({});
  //     setInitialRegion({
  //       latitude: locationGet.coords.latitude,
  //       longitude: locationGet.coords.longitude,
  //       latitudeDelta: 0.03,
  //       longitudeDelta: 0.03,
  //     });
  //     setMarkers({
  //       latitude: locationGet.coords.latitude,
  //       longitude: locationGet.coords.longitude,
  //     });
  //   })();
  // }, [arrMarker]);

  // const handleCheck = (item) => {
  //   if (doctors | stores | enginners) {
  //     setDoctors(false);
  //     setStore(false);
  //     setEnginners(false);
  //     setArrMarker(null);
  //   }
  //   switch (item) {
  //     case "Doctors":
  //       setDoctors(!doctors);
  //       break;
  //     case "Store":
  //       setStore(!stores);
  //       break;
  //     case "Engginers":
  //       setEnginners(!enginners);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const searchPlaces = () => {
  //   if (inputText == "Valledupar" || inputText == "valledupar") {
  //     mapView.current.animateToRegion(
  //       {
  //         // Takes a region object as parameter
  //         latitude: 10.476713507755939,
  //         longitude: -73.24236273765565,
  //         latitudeDelta: 0.03,
  //         longitudeDelta: 0.03,
  //       },
  //       1000
  //     );
  //   }
  // };

  // const handleEvent = (e, dataDB) => {
  //   const markeId = e._targetInst.return.key;
  //   const dataMarker = dataDB.find((m) => {
  //     return m.id == markeId;
  //   });
  //   setArrMarker(dataMarker);
  // };
  return (
    <>
      <SafeAreaView>
        <View>
          <Image
            h={150}
            w={150}
            m={10}
            top={hp(10)}
            position="absolute"
            alignSelf="center"
            source={require("../../assets/geo3.png")}
          />
        </View>
      </SafeAreaView>
      {/* <View style={{ flex: 1 }}>
        {initialRegion && (
          <>
            <MapView
              ref={mapView}
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

              {doctors && <MarkerList dataDB={DoctorsDB} event={handleEvent} />}
              {stores && <MarkerList dataDB={StoreDB} event={handleEvent} />}
              {enginners && (
                <MarkerList dataDB={EngginersDB} event={handleEvent} />
              )}
            </MapView>
          </>
        )}

        <View
          style={{
            position: "absolute",
            width: wp(100),
            marginTop: hp(14),
            paddingHorizontal: 20,
          }}
        >
          <Input
            onChangeText={(newText) => setInputText(newText)}
            rounded={15}
            placeholder="Type Location you want"
            value={inputText}
            fontSize={15}
            // p={2}
            focusBorderColor="blue700"
            suffix={
              <TouchableOpacity onPress={searchPlaces}>
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
            marginTop: hp(22),
            marginHorizontal: 20,
          }}
        >
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={checkList}
            key={(checkList) => checkList}
            // refreshControl={
            //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            // }
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
        {stores && arrMarker && <ListCard dataDB={arrMarker} />}
        {doctors && arrMarker && <ListCard dataDB={arrMarker} />}
        {enginners && arrMarker && <ListCard dataDB={arrMarker} />}
      </View> */}
    </>
  );
};
export default Maps;
