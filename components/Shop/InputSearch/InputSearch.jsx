import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Input, Icon } from "react-native-magnus";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
const InputSearch = () => {
  return (
    <View
      style={{
        marginTop: 20,
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
      }}
    >
      <Input
        w={wp(78)}
        bg="#F6F6F8"
        placeholder="Search Here..."
        p={10}
        focusBorderColor="blue700"
        prefix={
          <Icon
            name="search"
            color="gray"
            fontFamily="Feather"
            fontSize={22}
            mr={5}
          />
        }
      />
      <View style={{ backgroundColor: "#F6F6F8" }}>
        <TouchableOpacity>
          <Icon
            p={5}
            name="sound-mix"
            color="gray900"
            fontFamily="Entypo"
            fontSize={32}
          />
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => setModalCart(!modalCart)}>
          {countCart >= 1 ? (
            <Badge bg="red500" right={-2} top={35} h={11} w={11}>
              <Icon
                p={5}
                name="shoppingcart"
                color="gray900"
                fontFamily="AntDesign"
                fontSize={32}
              />
            </Badge>
          ) : (
            <Icon
              p={5}
              name="shoppingcart"
              color="gray900"
              fontFamily="AntDesign"
              fontSize={32}
            />
          )}
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default InputSearch;
