import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import yelp from "../api/yelp";

function ResultShowScreen({ navigation }) {
  const id = navigation.getParam("id");
  const [result, setResult] = useState(null);
  const getResult = async (id) => {
    const resp = await yelp.get(`/${id}`);
    setResult(resp.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  return result ? (
    <View style={styles.container}>
      <Text style={styles.name}>{result.name}</Text>
      <Carousel
        enableMomentum={false}
        lockScrollWhileSnapping={true}
        style={styles.carousel}
        autoplay
        autoplayDelay={1000}
        loop
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
        data={result.photos}
        sliderWidth={300}
        itemWidth={250}
        layout="stack"
        autoplayInterval={1000}
      />
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 200,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 15,
  },
});

export default ResultShowScreen;
