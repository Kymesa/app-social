import { FlatList, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CardPost from "./CardPost";
import { Image } from "react-native-magnus";
const ListPost = ({ datas }) => {
  const [data, setData] = useState([]);
  const [indexPage, setindexPage] = useState(0);
  useEffect(() => {
    const value = 6 + indexPage;
    const dataArr = datas.slice(0, value);
    if (data.length == 30) return;
    if (data.length == 0) {
      setData(dataArr);
    } else {
      setData(dataArr);
      console.log("LLAMANDO... DATOS NUEVOS");
      console.log(dataArr.length);
    }
  }, [indexPage]);
  return (
    <>
      {data && data.length > 0 && (
        <FlatList
          data={data}
          initialNumToRender={3}
          style={{ flex: 1 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardPost
              key={item.id}
              name={item.name}
              descripcion={item.descripcion}
              date={item.date}
              urlPost={item.urlPost}
              urlPerfil={item.urlPerfil}
              like={item.like}
              datas={data}
              id={item.id}
            />
          )}
          onEndReached={() => setindexPage((prevent) => prevent + 6)}
          ListFooterComponent={() => indicatorRn(data)}
        />
      )}
    </>
  );
};

const indicatorRn = (d) => {
  return (
    <>
      {d.length == 30 ? (
        <View style={{ marginBottom: 20 }}>
          <Text
            style={{ alignSelf: "center", fontSize: 18, fontWeight: "700" }}
          >
            No hay mas Datos...
          </Text>
        </View>
      ) : (
        <Image
          alignSelf="center"
          h={30}
          w={59}
          mb={20}
          source={require("../../assets/anu1.gif")}
        />
      )}
    </>
  );
};

export default ListPost;
