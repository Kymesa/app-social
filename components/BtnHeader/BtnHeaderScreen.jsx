import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-magnus";

const BtnHeaderScreen = ({ name }) => {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 15,
      }}
    >
      <Icon
        name={name}
        fontFamily="FontAwesome"
        fontSize={25}
        color="black"
        h={40}
        w={40}
        rounded="md"
      />
    </TouchableOpacity>
  );
};

export { BtnHeaderScreen };
