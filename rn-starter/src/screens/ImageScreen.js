import React from "react";
import { View, StyleSheet } from "react-native";
import ImageDetails from "../Components/ImageDetails";
import { FlatList } from "react-native-gesture-handler";

const ImageScreen = () => {
  const imagesData = [
    {
      title: "Forest",
      imageURL: require("../../assets/forest.jpg"),
      imageScore: 3,
    },
    {
      title: "Beach",
      imageURL: require("../../assets/beach.jpg"),
      imageScore: 5,
    },
    {
      title: "Mountain",
      imageURL: require("../../assets/mountain.jpg"),
      imageScore: 8,
    },
  ];
  return (
    <View>
      <FlatList
        data={imagesData}
        keyExtractor={(item) => item.title}
        renderItem={(element) => <ImageDetails imageSpecs={element.item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
