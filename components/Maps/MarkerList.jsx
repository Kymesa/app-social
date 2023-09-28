import { Marker } from "react-native-maps";

const MarkerList = ({ dataDB }) => {
  return (
    <>
      {dataDB.map((m, i) => (
        <Marker
          key={i}
          coordinate={m.cordinate}
          title={m.title}
          image={{ uri: m.imgUrl }}
        />
      ))}
    </>
  );
};

export default MarkerList;
