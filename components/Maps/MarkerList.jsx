import { Marker } from "react-native-maps";

const MarkerList = ({ dataDB, event  }) => {
  return (
    <>
      {dataDB.map((m) => (
        <Marker
          onPress={(e) => event(e, dataDB)}
          key={m.id}
          coordinate={m.cordinate}
          title={m.title}
          image={{ uri: m.imgUrl }}
        />
      ))}
    </>
  );
};

export default MarkerList;
