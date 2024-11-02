import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import FontAwesome from "@expo/vector-icons/FontAwesome5";

const mockData = [
  {
    type: "giyim",
    date: "30.03.2024",
    amount: "-1304.43",
    title: "LC Waikiki Mağazacılık Hizmetleri Ticaret Anonim Şirketi",
  },
  {
    type: "içecek",
    date: "13.04.2024",
    amount: "-310.00",
    title: "Happy Moon's Grup",
  },
];

export const Transactions = () => {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <View style={[{ justifyContent: "space-between" }, styles.row]}>
        <Text style={styles.title}>Kart hareketleri</Text>
        <TouchableOpacity
          onPress={() => console.log("see all")}
          style={styles.seeAllBtn}
        >
          <Text style={styles.bold}>Tümü</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardInfosContainer}>
        {mockData.map((item, index) => (
          <View key={index}>
            {index != 0 && <View style={styles.divider} />}

            <View style={styles.row}>
              <FontAwesome
                name={item.type === "giyim" ? "tshirt" : "glass-martini-alt"}
                size={16}
                color={Colors[colorScheme ?? "light"].tint}
                style={{
                  backgroundColor: "#f2f2f2",
                  padding: 8,
                  borderRadius: 24,
                }}
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.bold} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>

              <Text style={styles.bold}>{item.amount}</Text>
            </View>
          </View>
        ))}
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
    marginBottom: 16,
  },
  bold: {
    fontWeight: "500",
  },
  seeAllBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#ECEEF0",
  },
  date: {
    color: "#666",
    fontSize: 12,
  },
});
