// =======================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> // STACK NAVIGATON
import * as React from "react";
import { Button, View, Text, TextInput, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate("Details", { name: "Arif", age: 23, id: 9 })
        }
      />
      <Button
        title="Create post"
        onPress={() => navigation.navigate("CreatePost")}
      />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: "Updated!" })}
      />
    </View>
  );
}

function CreatePostScreen({ navigation }) {
  const [postText, setPostText] = React.useState("");

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: "white" }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate("Home", { post: postText });
        }}
      />
    </>
  );
}

function DetailsScreen({ route, navigation }) {
  const { id, name, age } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>
        Details Screen {name}, {age}, ID: {id}{" "}
      </Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push("Details", { id: Math.floor(Math.random() * 100) })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require("./assets/splash.png")}
    />
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#ffffff",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "My Home",
            headerTitle: (props) => <LogoTitle {...props} />,
          }}
        />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
