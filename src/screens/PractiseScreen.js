import React from "react";
import { Text, StyleSheet, View } from "react-native";

const PractiseScreen = () => {
  return (
    <View>
      <Text style={styles.textStyleFirst}>
        'Getting started with React Native!'
      </Text>
      <Text style={styles.textStyleSecond}>My name is Minh</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyleFirst: {
    fontSize: 45,
  },
  textStyleSecond: {
    fontSize: 20,
  },
});

export default PractiseScreen;
