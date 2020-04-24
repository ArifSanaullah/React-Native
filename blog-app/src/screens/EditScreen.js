import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../contexts/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

function EditScreen({ navigation }) {
  const {
    state: { blogPosts },
    editPost,
  } = useContext(Context);
  
  const blogPost = blogPosts.find(
    (post) => post.id === navigation.getParam("id")
  );

  return (
    <BlogPostForm
      onSubmit={(blogPost) =>
        editPost(blogPost, () => {
          navigation.pop();
        })
      }
      initialValues={{ ...blogPost }}
    />
  );
}

const styles = StyleSheet.create({});

export default EditScreen;
