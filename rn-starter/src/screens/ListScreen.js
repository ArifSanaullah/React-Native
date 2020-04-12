import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
  
  const ListScreen = () => {
    const friends = [
    { name: "Friend #1", age: 12 },
    { name: "Friend #2", age: 34 },
    { name: "Friend #3", age: 43 },
    { name: "Friend #4", age: 42 },
    { name: "Friend #5", age: 21 },
    { name: "Friend #6", age: 23 },
    { name: "Friend #7", age: 24 },
    { name: "Friend #8", age: 27 },
    { name: "Friend #9", age: 29 },
  ];

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              My ID is {item.name} and I'm {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 30,
    marginLeft: 100,
  }
});

export default ListScreen;
