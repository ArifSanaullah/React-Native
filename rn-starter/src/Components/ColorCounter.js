import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={onIncrease} />
      <Text></Text>
      <Button title={`Decrease ${color}`} onPress={onDecrease} />
      <Text></Text>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
