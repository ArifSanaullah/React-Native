import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../contexts/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

function CreateScreen({ navigation }) {
  const { addPost } = useContext(Context);
  return (
    <BlogPostForm
      onSubmit={(blogPost) => {
        addPost(blogPost, () => navigation.navigate("Index"));
      }}
    />
  );
}

const styles = StyleSheet.create({});

export default CreateScreen;
