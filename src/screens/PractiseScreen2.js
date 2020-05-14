import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const PractiseScreen2 = () => {
  const users = [
    { name: "minh", age: "24" },
    { name: "phong", age: "24" },
    { name: "hoang", age: "31" },
    { name: "linh", age: "29" },
    { name: "an", age: "33" },
    { name: "thang", age: "11" },
    { name: "tuan", age: "23" },
    { name: "xuan", age: "41" },
    { name: "huynh", age: "42" },
    { name: "quang", age: "53" },
    { name: "khoa", age: "42" },
    { name: "thuan", age: "11" },
  ];

  return (
    <FlatList
      keyExtractor={(users) => users.name}
      data={users}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default PractiseScreen2;
