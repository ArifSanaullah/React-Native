import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  const {
    navigation: { navigate },
  } = props;
  return (
    <View>
      <Text style={styles.text}>Welcome to HomeScreen</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigate("Components")}
      />
      <TouchableOpacity onPress={() => navigate("List")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
      <Button title="Go to Image Demo" onPress={() => navigate("Image")} />
      <Text></Text>
      <Button title="Go to Counter Demo" onPress={() => navigate("Counter")} />
      <Text></Text>
      <Button title="Go to Colors Demo" onPress={() => navigate("Colors")} />
      <Text></Text>
      <Button title="Go to Square Demo" onPress={() => navigate("Square")} />
      <Text></Text>
      <Button title="Go to Text Demo" onPress={() => navigate("Text")} />
      <Text></Text>
      <Button title="Go to Box Demo" onPress={() => navigate("Box")} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "grey",
  },
});

export default HomeScreen;
