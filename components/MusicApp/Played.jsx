import { Text, TouchableOpacity, View } from "react-native";
import PlayerdCard from "./cardMusic/PlayerCard";
const Played = () => {
  const imagesPeople = [
    {
      id: "675687",
      titulo: "Bohemian Rhapsody",
      album: "A Night at the Opera",
      img: "https://plus.unsplash.com/premium_photo-1692340972716-f2e08765ef90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "87687690",
      titulo: "Rolling in the Deep",
      album: "21",
      img: "https://images.unsplash.com/photo-1693859507588-e69572086bde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "543564647",
      titulo: "Hotel California",
      album: "Hotel California",
      img: "https://images.unsplash.com/photo-1692899934517-ac5589e13222?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "45365436",
      titulo: "Purple Haze",
      album: "Are You Experienced",
      img: "https://images.unsplash.com/photo-1693592681357-ae8543a48d28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "64576576",
      titulo: "Yesterday",
      album: "Help!",
      img: "https://plus.unsplash.com/premium_photo-1690515065463-515f8c7642c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "5434363",
      titulo: "Smells Like Teen Spirit",
      album: "Nevermind",
      img: "https://images.unsplash.com/photo-1694810792161-412a50ce1e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "1232124",
      titulo: "Thriller",
      album: "Thriller",
      img: "https://images.unsplash.com/photo-1689697247482-c8cb53d8f670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "675687",
      titulo: "Bohemian Rhapsody",
      album: "A Night at the Opera",
      img: "https://plus.unsplash.com/premium_photo-1692340972716-f2e08765ef90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "87687690",
      titulo: "Rolling in the Deep",
      album: "21",
      img: "https://images.unsplash.com/photo-1693859507588-e69572086bde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "543564647",
      titulo: "Hotel California",
      album: "Hotel California",
      img: "https://images.unsplash.com/photo-1692899934517-ac5589e13222?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "45365436",
      titulo: "Purple Haze",
      album: "Are You Experienced",
      img: "https://images.unsplash.com/photo-1693592681357-ae8543a48d28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "64576576",
      titulo: "Yesterday",
      album: "Help!",
      img: "https://plus.unsplash.com/premium_photo-1690515065463-515f8c7642c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "5434363",
      titulo: "Smells Like Teen Spirit",
      album: "Nevermind",
      img: "https://images.unsplash.com/photo-1694810792161-412a50ce1e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "1232124",
      titulo: "Thriller",
      album: "Thriller",
      img: "https://images.unsplash.com/photo-1689697247482-c8cb53d8f670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <View style={{ marginHorizontal: 10, marginTop: 0 }}>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          // padding: 10,
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Recently Played
        </Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 15, color: "gray" }}>All</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 15 }}>
        {imagesPeople.map((p) => (
          <>
            <PlayerdCard
              key={p.id}
              title={p.titulo}
              album={p.album}
              img={p.img}
            />
          </>
        ))}
      </View>
    </View>
  );
};

export { Played };
