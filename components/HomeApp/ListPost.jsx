import { ActivityIndicator, FlatList, View } from "react-native";
import React, { useEffect, useState } from "react";
import CardPost from "./CardPost";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "react-native-magnus";
const ListPost = ({ datas }) => {
  const [data, setData] = useState([]);
  const [indexPage, setindexPage] = useState(0);
  useEffect(() => {
    const value = 3 + indexPage;
    const dataArr = datas.slice(0, value);
    if (data.length == 33) return;
    if (data.length == 0) {
      setData(dataArr);
    } else {
      setTimeout(() => {
        setData(dataArr);
        console.log(dataArr.length);
      }, 1000);
    }
  }, [indexPage]);
  return (
    <>
      {data && data.length > 0 && (
        <View style={{ height: "100%" }}>
          <FlatList
            data={data}
            key={({ item }) => item}
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
              />
            )}
            onEndReached={() => setindexPage((prevent) => prevent + 3)}
            ListFooterComponent={() => indicatorRn(data)}
          />
        </View>
      )}
    </>
  );
};

const indicatorRn = (d) => {
  return (
    <>
      {d.length == 33 ? null : (
        <Image
          alignSelf="center"
          h={20}
          w={59}
          mb={20}
          source={require("../../assets/anu1.gif")}
        />
      )}
    </>
  );
};

export default ListPost;
