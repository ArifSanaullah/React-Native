import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context } from "../contexts/BlogContext";
import { Feather } from "@expo/vector-icons";

function IndexScreen({ navigation }) {
  const {
    state: { blogPosts },
    deletePost,
  } = useContext(Context);

  return (
    <View>
      <FlatList
        data={blogPosts}
        keyExtractor={(post) => post.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Show", { id: item.id })}
          >
            <View style={styles.row}>
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.content} >{item.content}</Text>
              </View>
              <TouchableOpacity onPress={() => deletePost(item.id)}>
                <Feather style={styles.icon} name="trash" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" size={30} style={styles.plusIcon} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 18,
  },
  content: {
    // flex: 1,
    // width: "auto",
  },
  icon: {
    fontSize: 24,
  },
  plusIcon: {
    marginRight: 7,
  },
});

export default IndexScreen;
