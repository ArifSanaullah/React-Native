import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AccountScreen() {
  const { signout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </View>
  );
}

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <MaterialCommunityIcons name="account-circle" size={20} />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default AccountScreen;
