import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function AboutPage() {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Über uns</Text>
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
