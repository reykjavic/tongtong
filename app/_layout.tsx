import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import "react-native-reanimated";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { AboutPage } from "./pages/AboutPage";
import { BuffetPage } from "./pages/BuffetPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { ImpressumPage } from "./pages/ImpressumPage";
import { MenuPage } from "./pages/MenuPage";

const pageTitle: { [key: string]: string } = {
  home: "Startseite - Tong Tong",
  about: "Über uns - Tong Tong",
  buffet: "Buffet-Info - Tong Tong",
  contact: "Kontakt / Öffnungszeiten - Tong Tong",
  menu: "Speisekarte - Tong Tong",
  impressum: "Impressum - Tong Tong",
};

export default function RootLayout() {
  const [currentRoute, setCurrentRoute] = useState("home");

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = pageTitle[currentRoute] || "Tong Tong";
    }
  }, [currentRoute]);

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
        <Footer onImpressumPress={() => setCurrentRoute("impressum")} />
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
