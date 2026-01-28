import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface FooterProps {
  onImpressumPress: () => void;
}

export function Footer({ onImpressumPress }: FooterProps) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={onImpressumPress}>
        <Text style={styles.impressumLink}>Impressum</Text>
      </TouchableOpacity>
      <Text style={styles.copyright}>© 2026 Tong Tong</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#f5f5f5",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: "center",
    gap: 8,
  },
  impressumLink: {
    fontSize: 12,
    color: "#999",
    textDecorationLine: "underline",
  },
  copyright: {
    fontSize: 11,
    color: "#bbb",
  },
});
