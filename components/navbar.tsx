import React, { useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

const menuItems = [
  { label: "Startseite", route: "home" },
  { label: "Buffet-Info", route: "buffet" },
  { label: "Speisekarte", route: "menu" },
  { label: "Kontakt- / Zeiten", route: "contact" },
  { label: "Über uns", route: "about" },
];

interface NavbarProps {
  currentRoute: string;
  onRouteChange: (route: string) => void;
}

export function Navbar({ currentRoute, onRouteChange }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const handleMenuItemPress = (route: string) => {
    onRouteChange(route);
    setMenuOpen(false);
  };

  if (!isMobile) {
    // Desktop view - horizontal centered menu
    return (
      <View style={styles.menuBar}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.menuContent}
        >
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.route}
              onPress={() => onRouteChange(item.route)}
              style={[
                styles.menuItem,
                currentRoute === item.route && styles.menuItemActiveDesktop,
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

  // Mobile view - hamburger menu
  return (
    <>
      <View style={styles.menuBar}>
        <TouchableOpacity
          onPress={() => setMenuOpen(!menuOpen)}
          style={styles.hamburger}
        >
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
          <View style={styles.hamburgerLine} />
        </TouchableOpacity>
        <Text style={styles.title}>Menu</Text>
      </View>

      <Modal
        visible={menuOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setMenuOpen(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setMenuOpen(false)}
          activeOpacity={1}
        >
          <View style={styles.menuDropdown}>
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.route}
                onPress={() => handleMenuItemPress(item.route)}
                style={[
                  styles.menuItem,
                  currentRoute === item.route && styles.menuItemActiveMobile,
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
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  menuBar: {
    backgroundColor: "#f5f5f5",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  menuContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  hamburger: {
    padding: 8,
  },
  hamburgerLine: {
    width: 24,
    height: 3,
    backgroundColor: "#666",
    marginVertical: 4,
    borderRadius: 2,
  },
  title: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-start",
  },
  menuDropdown: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    maxWidth: 300,
  },
  menuItem: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuItemActiveMobile: {
    backgroundColor: "#f0f7e8",
    borderLeftWidth: 3,
    borderLeftColor: "#6ba500",
    paddingLeft: 13,
  },
  menuItemActiveDesktop: {
    borderBottomWidth: 3,
    borderBottomColor: "#6ba500",
  },
  menuText: {
    fontSize: 16,
    color: "#666",
    fontWeight: "500",
  },
  menuTextActive: {
    color: "#6ba500",
    fontWeight: "600",
  },
});
