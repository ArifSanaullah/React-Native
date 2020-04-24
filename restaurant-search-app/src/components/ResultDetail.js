import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native"

function ResultsDetail({result}) {
    return (
        <View style={styles.container}>
            <Image source={{uri: result.image_url}} style={styles.image} />
            <Text style={styles.name} >{result.name}</Text>
            <Text>{result.rating} Stars {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginVertical: 5
    },
    name: {
        fontWeight: "bold",
    },
    container: {
        marginLeft: 15,
    }
});

export default ResultsDetail;
