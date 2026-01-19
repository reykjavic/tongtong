import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import "react-native-reanimated";

import { Navbar } from "@/components/navbar";
import { AboutPage } from "./pages/AboutPage";
import { BuffetPage } from "./pages/BuffetPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { ImpressumPage } from "./pages/ImpressumPage";
import { MenuPage } from "./pages/MenuPage";

export default function RootLayout() {
  const [currentRoute, setCurrentRoute] = useState("home");

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Navbar currentRoute={currentRoute} onRouteChange={setCurrentRoute} />
        <ScrollView style={styles.content}>
          {currentRoute === "home" && <HomePage />}
          {currentRoute === "about" && <AboutPage />}
          {currentRoute === "buffet" && <BuffetPage />}
          {currentRoute === "contact" && <ContactPage />}
          {currentRoute === "menu" && <MenuPage />}
          {currentRoute === "impressum" && <ImpressumPage />}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
  },
});
