import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { Whats } from "../components/HomeApp/Whats";
import { Todo } from "../components/HomeApp/Todo";
import Online from "../components/HomeApp/Online";
import History from "../components/HomeApp/History";
import CardPost from "../components/HomeApp/CardPost";
export default function Feed() {
  const postPublish = [
    {
      id: 1,
      name: "Karla Smitt",
      date: "4 days ago",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis alias maxime suscipit architecto ea? Asperiores, vero nemo?",
      urlPerfil:
        "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600",
      urlPost:
        "https://images.pexels.com/photos/930595/pexels-photo-930595.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Keiner Mesa",
      date: "2 days ago",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis alias maxime suscipit architecto ea? Asperiores, vero nemo?",
      urlPerfil:
        "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2dyYW1tZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      urlPost:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvbWVwJTIwbW92aWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Keiner Mesa",
      date: "Now",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis alias maxime suscipit architecto ea? Asperiores, vero nemo?",
      urlPerfil:
        "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2dyYW1tZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      urlPost:
        "https://cdn.pixabay.com/photo/2022/10/04/21/25/vr-7499157_640.jpg",
    },
  ];
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Whats />
          <Todo />
          <Online />
          <History />
          {postPublish.map((p) => (
            <CardPost
              key={p.id}
              name={p.name}
              descripcion={p.descripcion}
              date={p.date}
              urlPost={p.urlPost}
              urlPerfil={p.urlPerfil}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
