import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { View } from "react-native";

const TabbarTopLine = ({ color }: { color: string }) => {
  return (
    <View
      style={{
        width: "50%",
        height: 2,
        backgroundColor: color,
        marginTop: -8,
        marginBottom: 8,
      }}
    />
  );
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
      initialRouteName="cards"
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Ana Sayfa",
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused && (
                <TabbarTopLine color={Colors[colorScheme ?? "light"].tint} />
              )}
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
                size={20}
              />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          title: "Kartlar",
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused && (
                <TabbarTopLine color={Colors[colorScheme ?? "light"].tint} />
              )}
              <TabBarIcon
                name={focused ? "card" : "card-outline"}
                color={color}
                size={20}
              />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused && (
                <TabbarTopLine color={Colors[colorScheme ?? "light"].tint} />
              )}
              <TabBarIcon
                name={focused ? "person" : "person-outline"}
                color={color}
                size={20}
              />
            </>
          ),
        }}
      />
    </Tabs>
  );
}
