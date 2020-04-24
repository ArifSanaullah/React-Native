import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
    return <Text style={style.textStyle} >This is ComponentsScreen</Text>
}

const style = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    color: "pink"
  },
});

export default ComponentsScreen;