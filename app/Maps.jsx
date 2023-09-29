// ? RN UTILIZADOS
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
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
import { Icon, Input } from "react-native-magnus";
// ? DB - DOC - STORE - ENG
import { DoctorsDB } from "../components/Maps/DB/DoctorsDB";
import { StoreDB } from "../components/Maps/DB/StoreDB";
import { EngginersDB } from "../components/Maps/DB/EnginnersDB";
// ? CHECK LISTS
import { checkList } from "../components/Maps/DB/CheckList";
//? STYLE MAP
import { styleMap } from "../components/Maps/StyleMap";
import ListCard from "../components/Maps/ListCard";
import MarkerList from "../components/Maps/MarkerList";
const Maps = () => {
  const [initialRegion, setInitialRegion] = useState(null);
  const [markers, setMarkers] = useState(null);
  const [inputText, setInputText] = useState("");
  const [doctors, setDoctors] = useState(false);
  const [stores, setStore] = useState(false);
  const [enginners, setEnginners] = useState(false);
  // const [markerId, setMarkerId] = useState(0)
  const [arrMarker, setArrMarker] = useState(null)

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync({});
    if (status !== "granted") {
      alert("NO ACEPTASTE LOS PERMISOS DE UBICACION, NO FUNCIONARA!!!");
      return;
    }
    setInitialRegion({
      latitude: 10.476713507755939,
      longitude: -73.24236273765565,
      latitudeDelta: 0.03,
      longitudeDelta: 0.03,
    });
    setMarkers({
      latitude: 10.476713507755939,
      longitude: -73.24236273765565,
    });

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
  };

  useEffect(() => {
    getLocation();
  }, []);

  const handleCheck = (item) => {
    if (doctors | stores | enginners) {
      setDoctors(false);
      setStore(false);
      setEnginners(false);
      setArrMarker(null)
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

  //? INPUT SEARCH
  const onInputSearch = () => {
    // if (doctors | stores | enginners) {
    //   setDoctors(false);
    //   setStore(false);
    //   setEnginners(false);
    // }
    // switch (inputText.toLowerCase()) {
    //   case "doc":
    //   case "doctor":
    //   case "doctors":
    //     setDoctors(!doctors);
    //     break;
    //   case "store":
    //     setStore(!stores);
    //     break;
    //   case "eng":
    //   case "engginer":
    //   case "engginers":
    //     setEnginners(!enginners);
    //     break;
    //   default:
    //     alert("No coincide tu busqueda, con los check disponibles");
    //     setInputText("");
    //     break;
    // }



  };

  const handleEvent = (e, dataDB) => {
    const markeId = e._targetInst.return.key
    const dataMarker = dataDB.find((m) => {
      return m.id == markeId
    })
    setArrMarker(dataMarker)
  }
  return (
    <>
      <View style={{ flex: 1 }}>
        {initialRegion ? (
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

              {doctors && <MarkerList dataDB={DoctorsDB} event={handleEvent}/>}
              {stores && <MarkerList dataDB={StoreDB} event={handleEvent}/>}
              {enginners && <MarkerList dataDB={EngginersDB} event={handleEvent}/>}

              {/* {doctors
                ? DoctorsDB.map((m, i) => (
                    <Marker
                      key={i}
                      coordinate={m.cordinate}
                      title={m.title}
                      image={{ uri: m.imgUrl }}
                    />
                  ))
                : null} */}
              {/* {stores
                ? StoreDB.map((m, i) => (
                    <Marker
                      key={i}
                      coordinate={m.cordinate}
                      title={m.title}
                      image={{ uri: m.imgUrl }}
                    />
                  ))
                : null}
              {enginners
                ? EngginersDB.map((m, i) => (
                    <Marker
                      key={i}
                      coordinate={m.cordinate}
                      title={m.title}
                      image={{ uri: m.imgUrl }}
                    />
                  ))
                : null} */}
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
                value={inputText}
                fontSize={15}
                // p={2}
                focusBorderColor="blue700"
                suffix={
                  <TouchableOpacity onPress={onInputSearch}>
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
                data={checkList}
                key={(checkList) => checkList}
                renderItem={({ item }) => (
                  <Pressable
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
                  </Pressable>
                )}
              />
            </View>
            {stores && arrMarker && <ListCard dataDB={arrMarker} />}
            {doctors && arrMarker && <ListCard dataDB={arrMarker} />}
            {enginners && arrMarker && <ListCard dataDB={arrMarker} />}
          </>
        ) : null}
      </View>
    </>
  );
};
export default Maps;
