import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

function BlogPostForm({
  onSubmit,
  initialValues = { title: "", content: "", id: `${Date.now()}` },
}) {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return (
    <View>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        value={title}
        style={styles.input}
        placeholder="Title"
        autoFocus
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Content:</Text>
      <TextInput
        value={content}
        style={styles.input}
        placeholder="Content" selectTextOnFocus={false}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Save Blog Post"
        onPress={() => onSubmit({ ...initialValues, title, content })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    margin: 5,
    fontWeight: "bold",
  },
  input: {
    fontSize: 18,
    padding: 3,
    margin: 5,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "black",
  },
});

export default BlogPostForm;
