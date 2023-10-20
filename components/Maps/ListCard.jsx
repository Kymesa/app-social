import { ScrollView } from "react-native-gesture-handler";
import { Icon, Image } from "react-native-magnus";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import StarRating from "./Rating";
import { View, Text } from "react-native";
const ListCard = ({ dataDB }) => {
  return (
    <View
      style={{
        position: "absolute",
        top: hp(82),
        marginHorizontal: wp(12),
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            width: wp(70),
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
                uri: dataDB.imgUrl,
              }}
            />
          </View>
          <View style={{ marginLeft: wp(3) }}>
            <Text style={{ fontWeight: "bold", marginTop: hp(1.5) }}>
              {dataDB.title}
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
              <StarRating ratings={dataDB.rating} reviews={10} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ListCard;
