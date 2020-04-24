import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Context } from "../contexts/BlogContext";
import { Feather } from "@expo/vector-icons";

function ShowScreen({ navigation }) {
  const {
    state: { blogPosts },
  } = useContext(Context);
  const blogPost = blogPosts.find(
    (post) => post.id === navigation.getParam("id")
  );
  return (
    <View style={styles.view}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <Feather name="edit" style={styles.icon} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  view: {
    padding: 15,
  },
  icon: {
    fontSize: 24,
    marginRight: 7,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
  },
});

export default ShowScreen;
