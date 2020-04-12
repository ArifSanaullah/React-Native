import React, { useReducer } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ColorCounter from "../Components/ColorCounter";

const COLOR_AMOUNT = 20;

const initialState = {
  red: 0,
  green: 0,
  blue: 0,
};

const SquareScreen = () => {
  const reducer = (state, action) => {
    if (
      state[action.type] + action.payload > 255 ||
      state[action.type] + action.payload < 0
    )
      return state;
    switch (action.type) {
      case "red":
        return { ...state, red: state.red + action.payload };

      case "green":
        return { ...state, green: state.green + action.payload };

      case "blue":
        return { ...state, blue: state.blue + action.payload };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const { red, green, blue } = state;

  const colors = [
    {
      color: "Red",
      onIncrease: () => dispatch({ type: "red", payload: COLOR_AMOUNT }),
      onDecrease: () => dispatch({ type: "red", payload: -1 * COLOR_AMOUNT }),
    },
    {
      color: "Green",
      onIncrease: () => dispatch({ type: "green", payload: COLOR_AMOUNT }),
      onDecrease: () => dispatch({ type: "green", payload: -1 * COLOR_AMOUNT }),
    },
    {
      color: "Blue",
      onIncrease: () => dispatch({ type: "blue", payload: COLOR_AMOUNT }),
      onDecrease: () => dispatch({ type: "blue", payload: -1 * COLOR_AMOUNT }),
    },
  ];

  const renderItem = ({ item }) => <ColorCounter {...item} />;

  return (
    <View>
      <FlatList
        data={colors}
        keyExtractor={({ color }) => color}
        renderItem={renderItem}
      />
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
