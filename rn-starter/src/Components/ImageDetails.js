import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetails = ({ imageSpecs }) => {
  const { title, imageURL, imageScore } = imageSpecs;
  return (
    <View>
      <Image source={imageURL} />
          <Text>{title}</Text>
          <Text>Image Score: {imageScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetails;
