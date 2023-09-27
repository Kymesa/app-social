import { FlatList } from "react-native-gesture-handler";
import { Icon, Image } from "react-native-magnus";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import StarRating from "./Rating";
import { View, Text } from "react-native";
const ListCard = ({ dataDB }) => {
  return (
    <>
      <View
        style={{
          position: "absolute",
          top: hp(79),
          left: wp(2),
        }}
      >
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dataDB}
          key={(dataDB) => dataDB}
          style={{ marginRight: 20 }}
          renderItem={({ item }) => (
            <View
              style={{
                width: wp(60),
                backgroundColor: "white",
                marginHorizontal: 10,
                height: hp(10),
                flex: 1,
                flexDirection: "row",
                borderRadius: 10,
              }}
            >
              <View>
                <Image
                  h={74}
                  w={60}
                  ml={8}
                  mt={5}
                  rounded={10}
                  source={{
                    uri: item.imgUrl,
                  }}
                />
              </View>
              <View style={{ marginLeft: wp(3) }}>
                <Text style={{ fontWeight: "bold", marginTop: hp(1.5) }}>
                  {item.title}
                </Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    maxHeight: 20,
                  }}
                >
                  <Icon
                    name="map-pin"
                    fontFamily="Feather"
                    fontSize={12}
                    color="red"
                    bg="white"
                    h={18}
                    w={18}
                    rounded="md"
                  />
                  <Text style={{ color: "#444", fontSize: 12 }}>2.5 Km</Text>
                </View>
                <View>
                  <StarRating ratings={item.rating} reviews={10} />
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default ListCard;
