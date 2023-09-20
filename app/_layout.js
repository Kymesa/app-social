import { Tabs } from "expo-router/tabs";
import { Icon, Image } from "react-native-magnus";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerLeftContainerStyle: { marginLeft: 5 },
          headerRight: () => (
            <Icon
              mr={20}
              name="search"
              color="black"
              fontSize="6xl"
              fontFamily="FontAwesome"
            />
          ),
          headerTintColor: "rgba(215,121,255,1)",
          title: "Friendy",
          tabBarLabel: "Feed",
          tabBarIcon: () => (
            <Icon
              name="dehaze"
              color="purple"
              fontSize="6xl"
              fontFamily="MaterialIcons"
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
              color="gray"
              fontSize="6xl"
              fontFamily="Ionicons"
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
              name="message-square"
              color="gray"
              fontSize="6xl"
              fontFamily="Feather"
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
              color="gray"
              fontSize="6xl"
              fontFamily="Ionicons"
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
