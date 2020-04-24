import React from "react";
import { View, Text, StyleSheet } from "react-native";

function BoxScreen() {
  return (
    <View style={styles.viewStyle}>
      <Text style={{ ...styles.textOneStyle, ...styles.textStyle }}>
        Child #1
      </Text>
      <Text style={{ ...styles.textTwoStyle, ...styles.textStyle }}>
        Child #2
      </Text>
      <Text style={{...styles.textThreeStyle, ...styles.textStyle}}>Child #3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    borderColor: "black",
    borderWidth: 1,
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textStyle: {
    width: 50,
    height: 50
  },
  textOneStyle: {
    borderColor: "red",
    borderWidth: 1,
  },
  textTwoStyle: {
    borderColor: "red",
    borderWidth: 1,
    fontSize: 18,
    alignSelf: "flex-end",
    // position: "absolute",
    // top: 50, 
    // right: 0,
    // bottom: 0,
    // left: 0,
    // ...StyleSheet.absoluteFillObject // this line is same as above five commented props
  },
  textThreeStyle: {
    borderColor: "red",
    borderWidth: 1,
  },
});

export default BoxScreen;