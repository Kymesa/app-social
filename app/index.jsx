import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { Whats } from "../components/Whats";
import { Todo } from "../components/Todo";
import Online from "../components/Online";
import History from "../components/History";
import CardPost from "../components/CardPost";
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
        "https://scontent.feoh2-1.fna.fbcdn.net/v/t39.30808-6/348585370_736933431767249_7487258338953250947_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeETjGAToVaEk1ZOuD-PIA92x6o8e0DguV7Hqjx7QOC5XuFjOGje9nFwL3ljPYMFG1twjIo4YYYG4ADc3JJfbuET&_nc_ohc=evb3dC2fmlgAX8mmI4J&_nc_ht=scontent.feoh2-1.fna&oh=00_AfDmrWYwUEl0ySsImLEvAjc-3aubXXnfYIlX-wXQXVITHg&oe=65102822",
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
        "https://scontent.feoh2-1.fna.fbcdn.net/v/t39.30808-6/348585370_736933431767249_7487258338953250947_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeETjGAToVaEk1ZOuD-PIA92x6o8e0DguV7Hqjx7QOC5XuFjOGje9nFwL3ljPYMFG1twjIo4YYYG4ADc3JJfbuET&_nc_ohc=evb3dC2fmlgAX8mmI4J&_nc_ht=scontent.feoh2-1.fna&oh=00_AfDmrWYwUEl0ySsImLEvAjc-3aubXXnfYIlX-wXQXVITHg&oe=65102822",
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
