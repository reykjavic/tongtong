import React from "react";
import { Text, View, StyleSheet } from "react-native";

export function MenuPage() {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Speisekarte</Text>
      <Text>Content goes here...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
});