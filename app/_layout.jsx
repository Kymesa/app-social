import { Tabs } from "expo-router/tabs";
import { Badge, Icon, Image } from "react-native-magnus";
import { BtnHeaderScreen } from "../components/BtnHeader/BtnHeaderScreen";
import BtnHeaderMaps from "../components/BtnHeader/BtnHeaderMaps";
import { Text, TouchableOpacity, View } from "react-native";

const cartLenght = 0;
export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 20,
        },
        tabBarLabelStyle: {
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 12,
        },
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "black",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShadowVisible: false,
          headerLeftContainerStyle: { marginLeft: 5 },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 26,
          },
          headerRight: () => (
            <Icon
              mr={15}
              name="search"
              color="black"
              fontSize={25}
              h={40}
              w={40}
              fontFamily="FontAwesome"
              rounded="md"
            />
          ),
          headerTintColor: "rgba(215,121,255,1)",
          title: "Friendy",
          tabBarLabel: "Feed",
          tabBarIcon: () => (
            <Icon
              name="home"
              color="black"
              fontSize={32}
              h={40}
              w={40}
              fontFamily="AntDesign"
              rounded="md"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Music"
        options={{
          headerShadowVisible: false,
          title: "Music",
          headerLeft: () => <BtnHeaderScreen name="cog" />,
          headerRight: () => <BtnHeaderScreen name="search" />,
          tabBarLabel: "Music",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 24,
          },
          tabBarIcon: () => (
            <Icon
              name="musical-notes-outline"
              fontFamily="Ionicons"
              fontSize={32}
              color="black"
              h={40}
              w={40}
              rounded="md"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Maps"
        options={{
          headerTitleContainerStyle: { marginTop: 30 },
          headerTitleStyle: { fontWeight: "bold", color: "black" },
          title: "Your Location",
          headerTintColor: "white",
          tabBarLabel: "Maps",
          headerTitleAlign: "center",
          headerTransparent: true,
          tabBarIcon: () => (
            <Icon
              name="map-pin"
              color="black"
              fontSize={30}
              h={40}
              w={40}
              fontFamily="Feather"
              rounded="md"
            />
          ),
          headerLeft: () => <BtnHeaderMaps />,
        }}
      />
      <Tabs.Screen
        name="Shop"
        options={{
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                h={52}
                w={52}
                ml={5}
                rounded="circle"
                source={{
                  uri: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600",
                }}
              />
              <Text
                style={{ fontWeight: "bold", fontSize: 18, marginLeft: 20 }}
              >
                Agasya
              </Text>
            </View>
          ),
          tabBarIcon: () => (
            <Icon
              name="shopping-bag"
              color="black"
              h={40}
              w={40}
              fontSize={30}
              fontFamily="Feather"
              rounded="md"
            />
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => alert("PRES")}>
              <Icon
                shadow={"md"}
                borderWidth={1}
                bg="white"
                borderColor="white"
                rounded={"circle"}
                name="menu"
                ml={20}
                p={2}
                color="black"
                fontSize="6xl"
                fontFamily="Entypo"
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => alert("PRES")}>
              {cartLenght > 0 ? (
                <Badge bg="red500" right={20} top={-2} h={13} w={13}>
                  <Icon
                    p={3}
                    shadow={"md"}
                    borderWidth={1}
                    bg="white"
                    borderColor="white"
                    rounded={"circle"}
                    name="shoppingcart"
                    mr={20}
                    color="black"
                    fontSize="6xl"
                    fontFamily="AntDesign"
                  />
                </Badge>
              ) : (
                <Icon
                  p={3}
                  shadow={"xl"}
                  borderWidth={1}
                  bg="white"
                  borderColor="white"
                  rounded={"circle"}
                  name="shoppingcart"
                  mr={20}
                  color="black"
                  fontSize="6xl"
                  fontFamily="AntDesign"
                />
              )}
            </TouchableOpacity>
          ),
          headerShadowVisible: false,
        }}
      />
      <Tabs.Screen
        name="Setting"
        options={{
          headerTitleAlign: "center",
          tabBarIcon: () => (
            <Image
              h={35}
              w={40}
              rounded="circle"
              source={{
                uri: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600",
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
