// import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import { FontAwesome } from "@expo/vector-icons";

function TrackCreateScreen({ isFocused }) {
  // isFocused is coming from the HOC (withNavitationFocus)
  const {
    addLocation,
    state: { recording, locations },
  } = useContext(LocationContext);

  const cb = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );

  const [locationError] = useLocation(isFocused || recording, cb);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h1>Create Track</Text>
      <Map />
      {locationError ? (
        <Text>Please enable location services for the application</Text>
      ) : null}
      <TrackForm />
    </SafeAreaView>
  );
}

TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome name="plus" size={20} />,
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
