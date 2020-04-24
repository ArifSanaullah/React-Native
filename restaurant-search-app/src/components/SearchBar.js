import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

function SearchBar({ term, onTermChange, onTermSubmit }) {
  return (
    <View style={styles.backgroundStyles}>
      <Feather name="search" style={styles.iconStyles} />
      <TextInput
        autoCapitalize="none"
        placeholder="Search"
        autoCorrect={false}
        value={term}
        style={styles.inputStyles}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyles: {
    height: 50,
    margin: 15,
    backgroundColor: "#dcdcdc",
    borderRadius: 5,
    flexDirection: "row",
  },
  inputStyles: {
    flex: 1,
    fontSize: 18,
  },
  iconStyles: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
