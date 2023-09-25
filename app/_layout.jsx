import { Tabs } from "expo-router/tabs";
import { Icon, Image } from "react-native-magnus";
import { BtnHeaderScreen } from "../components/BtnHeader/BtnHeaderScreen";
import BtnHeaderMaps from "../components/BtnHeader/BtnHeaderMaps";
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
        name="Peoples"
        options={{
          headerTitleAlign: "center",
          tabBarIcon: () => (
            <Icon
              name="people-outline"
              color="black"
              h={40}
              w={40}
              fontSize={32}
              fontFamily="Ionicons"
              rounded="md"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Messages"
        options={{
          headerTitleAlign: "center",
          tabBarIcon: () => (
            <Icon
              name="message1"
              color="black"
              fontSize={30}
              h={40}
              w={40}
              fontFamily="AntDesign"
              rounded="md"
            />
          ),
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
                uri: "https://images.unsplash.com/photo-1693249646175-8b21fe05acc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
