import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { usePathname, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import styles from "./BottomNavigation.styles";

export default function BottomNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    {
      name: "Home",
      icon: "home-outline",
      activeIcon: "home",
      route: "/",
    },
    {
      name: "Family",
      icon: "people-outline",
      activeIcon: "people",
      route: "/family",
    },
    {
      name: "Executive",
      icon: "medkit-outline",
      activeIcon: "medkit",
      route: "/executive",
    },
    {
      name: "Consultation",
      icon: "chatbubble-outline",
      activeIcon: "chatbubble",
      route: "/consultation",
    },
    {
      name: "Profile",
      icon: "person-outline",
      activeIcon: "person",
      route: "/consultation/profile",
    },
  ];

  const isActive = (route: string) => {
    if (route === "/") {
      return pathname === "/" || pathname === "";
    }

    return pathname === route || pathname.startsWith(`${route}/`);
  };

  const handlePress = (route: string) => {
    router.replace(route);
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const active = isActive(tab.route);

        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tab}
            activeOpacity={0.8}
            onPress={() => handlePress(tab.route)}
          >
            <Ionicons
              name={(active ? tab.activeIcon : tab.icon) as any}
              size={24}
              color={active ? "#7DA46B" : "#A8A8A8"}
            />

            <Text
              style={[
                styles.label,
                active && styles.activeLabel,
              ]}
            >
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}