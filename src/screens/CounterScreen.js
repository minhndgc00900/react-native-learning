import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const INCREMENT = 1;

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return state.counter < 0
        ? state
        : { ...state, counter: state.counter + action.payload };
    case "decrease":
      return state.counter < 0
        ? state
        : { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};
const CounterScreen = () => {
  //const [counter, setCounter] = useState(0);

  const [state, setCounter] = useReducer(reducer, {
    counter: 0,
  });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter({ type: "increase", payload: 1 });
        }}
      />

      <Button
        title="Decrease"
        onPress={() => {
          setCounter({ type: "decrease", payload: 1 });
        }}
      />

      <Text>Current Count: {state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
