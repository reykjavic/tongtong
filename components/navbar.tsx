import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const menuItems = [
  { label: "Startseite", route: "home" },
  { label: "Über uns", route: "about" },
  { label: "Buffet-Info", route: "buffet" },
  { label: "Kontakt / Öffnungszeiten", route: "contact" },
  { label: "Speisekarte", route: "menu" },
  { label: "Impressum", route: "impressum" },
];

interface NavbarProps {
  currentRoute: string;
  onRouteChange: (route: string) => void;
}

export function Navbar({ currentRoute, onRouteChange }: NavbarProps) {
  return (
    <View style={styles.menuBar}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.route}
            onPress={() => onRouteChange(item.route)}
            style={[
              styles.menuItem,
              currentRoute === item.route && styles.menuItemActive,
            ]}
          >
            <Text
              style={[
                styles.menuText,
                currentRoute === item.route && styles.menuTextActive,
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  menuBar: {
    backgroundColor: "#f5f5f5",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 12,
  },
  menuItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  menuItemActive: {
    borderBottomWidth: 2,
    borderBottomColor: "#6ba500",
  },
  menuText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  menuTextActive: {
    color: "#6ba500",
    fontWeight: "600",
  },
});
