import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function TrackListScreen({ navigation }) {
  return (
    <>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Button
        title="Go to track detail screen"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </>
  );
}

const styles = StyleSheet.create({});

export default TrackListScreen;
