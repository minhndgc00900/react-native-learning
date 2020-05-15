import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        score={7}
      />
      <ImageDetail
        title="Phong"
        imageSource={require("../../assets/mountain.jpg")}
        score={2}
      />
      <ImageDetail
        title="WTF"
        imageSource={require("../../assets/mountain.jpg")}
        score={10}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageScreen;
