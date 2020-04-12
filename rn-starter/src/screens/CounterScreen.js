import React, { useReducer } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CounterScreen = () => {
  const initialState = {
    counter: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, counter: state.counter + action.payload };

      case "DECREMENT":
        return { ...state, counter: state.counter - action.payload };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { counter } = state;

  return (
    <View>
      <Button
        title="Increment"
        onPress={() => dispatch({ type: "INCREMENT", payload: 1 })}
      />
      <Text></Text>
      <Button
        title="Decrement"
        onPress={() => dispatch({ type: "DECREMENT", payload: 1 })}
      />
      <Text>Counter: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
