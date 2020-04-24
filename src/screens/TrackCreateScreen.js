import "../_mockLocation";
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

function TrackCreateScreen({ isFocused }) {
  // isFocused is coming from HOC (withNavitationFocus)
  const { addLocation } = useContext(LocationContext);
  const [locationError] = useLocation(isFocused, addLocation);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h1>Create Track</Text>
      <Map />
      {locationError ? (
        <Text>Please enable location services for the application</Text>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
