import React from "react";
import { Text, View, StyleSheet } from "react-native";

export function BuffetPage() {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Buffet-Info</Text>
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