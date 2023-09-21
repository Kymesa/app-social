import { Tabs } from "expo-router/tabs";
import { Icon, Image } from "react-native-magnus";
import { BtnHeaderScreen } from "../components/BtnHeader/BtnHeaderScreen";
import { TouchableOpacity } from "react-native";
export default function Layout() {
  return (
    <Tabs>
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
              name="dehaze"
              color="pink600"
              fontSize={32}
              h={40}
              w={40}
              fontFamily="MaterialIcons"
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
          },
          tabBarIcon: () => (
            <Icon
              name="music"
              fontFamily="Foundation"
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
        name="Peoples"
        options={{
          headerTitleAlign: "center",
          tabBarIcon: () => (
            <Icon
              name="people"
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
        name="Notications"
        options={{
          headerTitleAlign: "center",
          tabBarIcon: () => (
            <Icon
              name="notifications"
              color="black"
              fontSize={32}
              h={40}
              w={40}
              fontFamily="Ionicons"
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
