import React from "react";
import { View, Text, StyleSheet } from "react-native";

function BoxScreen() {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    borderColor: "black",
    borderWidth: 1,
    height: 200,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  textStyle: {
    borderColor: "red",
    borderWidth: 1,
  },
});

export default BoxScreen;
