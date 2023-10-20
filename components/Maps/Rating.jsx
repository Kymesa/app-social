import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-magnus";

const StarRating = (props) => {
  let stars = [];
  for (var i = 1; i <= 5; i++) {
    let name = "star";
    if (i > props.ratings) {
      name = "star-outline";
    }
    stars.push(
      <Icon
        key={i}
        rounded="circle"
        name={name}
        color="yellow600"
        fontSize="xl"
        fontFamily="Ionicons"
      />
    );
  }

  return (
    <View style={styles.container}>
      {stars}
      <Text style={styles.text}>({props.reviews})</Text>
    </View>
  );
};

export default StarRating;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    color: "#FF8C00",
  },
  text: {
    fontSize: 12,
    marginLeft: 5,
    color: "#444",
  },
});
