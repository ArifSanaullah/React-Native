import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { Context as TrackCotnext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";

function TractDetailScreen({ navigation }) {
  const _id = navigation.getParam("_id");
  const { state } = useContext(TrackCotnext);
  const track = state.find((t) => t._id === _id);
  const initialCoords = track.locations[0].coords;
  return (
    <>
      <Text style={styles.title}>{track.name}</Text>
      <MapView
        initialRegion={{
          latitudeDelta: 0.007,
          longitudeDelta: 0.007,
          ...initialCoords,
        }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </>
  );
}

TractDetailScreen.navigationOptions = {
  title: "Track Details",
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
  title: {
    fontSize: 48,
    margin: 10,
    marginTop: 5,
  },
});

export default TractDetailScreen;
