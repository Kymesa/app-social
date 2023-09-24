import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from "react-native";
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
export default function Maps() {
  const dataName = [
    {
      name: "Store",
      iconName: "store-alt",
      iconFamly: "FontAwesome5",
    },
    {
      name: "Professionals",
      iconName: "doctor",
      iconFamly: "MaterialCommunityIcons",
    },
    {
      name: "Enginner",
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
  const [location, setLocation] = useState(null);
  const [initialRegion, setInitialRegion] = useState(null);
  const [markers, setMarkers] = useState(null);
  const styleMap = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8ec3b9",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1a3646",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#4b6878",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#64779e",
        },
      ],
    },
    {
      featureType: "administrative.province",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#4b6878",
        },
      ],
    },
    {
      featureType: "landscape.man_made",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#334e87",
        },
      ],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [
        {
          color: "#023e58",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#283d6a",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#6f9ba5",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#023e58",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#3C7680",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#304a7d",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#98a5be",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#2c6675",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#255763",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#b0d5ce",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#023e58",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#98a5be",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#283d6a",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#3a4762",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#0e1626",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#4e6d70",
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

    let locationGet = await Location.getCurrentPositionAsync({});
    // setLocation(locationGet);
    console.log(locationGet);
    setInitialRegion({
      latitude: locationGet.coords.latitude,
      longitude: locationGet.coords.longitude,
      latitudeDelta: 0.009,
      longitudeDelta: 0.004,
    });
    //  setMarkers({
    //   latitude: locationGet.coords.latitude,
    //   longitude: locationGet.coords.longitude,
    // });
  }
  useEffect(() => {
    console.log("HOLA1");
    getLocation();
    console.log("HOLA2");
  }, []);

  // let text = "Waiting..";
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   console.log(location);
  //   text = JSON.stringify(location);
  // }
  return (
    <>
      <View style={styles.container}>
        {initialRegion ? (
          <MapView initialRegion={initialRegion} style={styles.map} />
        ) : (
          <MapView style={styles.map} />
        )}
      </View>
    </>

    // <View style={{ flex: 1 }}>
    //   {initialRegion && markers && (
    //     <>
    //       <MapView
    //         customMapStyle={styleMap}
    //         showsCompass={false}
    //         loadingIndicatorColor="red"
    //         // showsTraffic={true}
    //         loadingEnabled={true}
    //         // zoomEnabled={true}
    //         provider={PROVIDER_GOOGLE}
    //         initialRegion={initialRegion}
    //         style={{ width: wp(100), height: hp(100) }}
    //       >
    //         <Marker
    //           coordinate={markers}
    //           title="test-title"
    //           description="test-descripcion"
    //         >
    //           <Callout tooltip>
    //             <View>
    //               <View style={styles.bubble}>
    //                 <Text style={styles.name}>Favourite Restaurant</Text>
    //                 <Text>A short description</Text>
    //                 {/* <Image
    //                 style={styles.image}
    //                 source={{
    //                   uri: "https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    //                 }}
    //               /> */}
    //               </View>
    //               <View style={styles.arrowBorder} />
    //               <View style={styles.arrow} />
    //             </View>
    //           </Callout>
    //         </Marker>

    //         <Circle
    //           center={markers}
    //           radius={8}
    //           strokeWidth={5}
    //           strokeColor="tomato"
    //         />
    //       </MapView>
    //       <View
    //         style={{
    //           position: "absolute",
    //           width: wp(100),
    //           marginTop: hp(12),
    //           paddingHorizontal: 20,

    //           // marginHorizontal: wp(10),
    //         }}
    //       >
    //         <Input
    //           rounded={20}
    //           placeholder="Search"
    //           p={5}
    //           focusBorderColor="blue700"
    //           suffix={
    //             <Icon name="search" color="gray900" fontFamily="Feather" />
    //           }
    //         />
    //       </View>
    //       <View
    //         style={{
    //           position: "absolute",
    //           width: wp(90),
    //           marginTop: hp(20),
    //           marginHorizontal: 20,
    //         }}
    //       >
    //         <FlatList
    //           showsHorizontalScrollIndicator={false}
    //           horizontal
    //           data={dataName}
    //           key={(dataName) => dataName}
    //           renderItem={({ item }) => (
    //             <TouchableWithoutFeedback
    //               onPress={() => alert(item.name)}
    //               style={{
    //                 backgroundColor: "#1B2736",
    //                 marginHorizontal: 5,
    //                 flex: 1,
    //                 flexDirection: "row",
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //                 borderRadius: 10,
    //                 padding: 6,
    //               }}
    //             >
    //               <Icon
    //                 name={item.iconName}
    //                 color="white"
    //                 fontSize={22}
    //                 mr={10}
    //                 ml={10}
    //                 fontFamily={item.iconFamly}
    //               />
    //               <Text style={{ fontWeight: "bold", color: "white" }}>
    //                 {item.name}
    //               </Text>
    //             </TouchableWithoutFeedback>
    //           )}
    //         />
    //       </View>
    //     </>
    //   )}
    // </View>
  );
}
// const styles = StyleSheet.create({
//   map: {
//     height: "100%",
//   },
//   // Callout bubble
//   bubble: {
//     flexDirection: "column",
//     alignSelf: "flex-start",
//     backgroundColor: "#fff",
//     borderRadius: 6,
//     borderColor: "#ccc",
//     borderWidth: 0.5,
//     padding: 15,
//     width: 150,
//   },
//   // Arrow below the bubble
//   arrow: {
//     backgroundColor: "transparent",
//     borderColor: "transparent",
//     borderTopColor: "#fff",
//     borderWidth: 16,
//     alignSelf: "center",
//     marginTop: -32,
//   },
//   arrowBorder: {
//     backgroundColor: "transparent",
//     borderColor: "transparent",
//     borderTopColor: "#007a87",
//     borderWidth: 16,
//     alignSelf: "center",
//     marginTop: -0.5,
//     // marginBottom: -15
//   },
//   // Character name
//   name: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   // Character image
//   image: {
//     width: 40,
//     height: 80,
//   },
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});