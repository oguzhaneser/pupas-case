import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export const CardInfo = () => {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kart bilgileri</Text>

      <View style={styles.cardInfosContainer}>
        <View style={styles.row}>
          <Ionicons
            name="card-outline"
            size={16}
            color={Colors[colorScheme ?? "light"].tint}
            style={{
              backgroundColor: "#f2f2f2",
              padding: 8,
              borderRadius: 24,
            }}
          />
          <Text style={styles.bold}>4310 1030 3000 9530</Text>
          <TouchableOpacity onPress={() => console.log("copy")}>
            <Ionicons name="copy-outline" size={16} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Ionicons
            name="calendar-outline"
            size={16}
            color={Colors[colorScheme ?? "light"].tint}
            style={{
              backgroundColor: "#f2f2f2",
              padding: 8,
              borderRadius: 24,
            }}
          />
          <Text style={styles.bold}>10 / 26</Text>
          <Ionicons
            name="card-outline"
            size={16}
            color={Colors[colorScheme ?? "light"].tint}
            style={{
              backgroundColor: "#f2f2f2",
              padding: 8,
              borderRadius: 24,
            }}
          />
          <Text style={styles.bold}>430 </Text>
          <TouchableOpacity onPress={() => console.log("copy")}>
            <Ionicons name="copy-outline" size={16} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
  },
  cardInfosContainer: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 10,
    width: "100%",
    minHeight: 100,
    gap: 16,
    borderWidth: 1,
    borderColor: "#ECEEF0",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#ECEEF0",
    marginHorizontal: -16,
  },
  bold: {
    fontWeight: "500",
  },
});
