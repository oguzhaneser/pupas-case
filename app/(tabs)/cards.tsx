import CustomButton from "@/components/CustomButton";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { CardInfo } from "@/components/cards/CardInfo";
import { Transactions } from "@/components/cards/Transactions";

export default function CardsScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <View style={styles.headerImage}>
          <LinearGradient
            colors={["#ffffff", "#EF4A153b"]}
            style={styles.background}
            start={[0.5, 0]}
            end={[0.5, 1]}
          />
          <Text style={styles.headerTitle}>Kartım</Text>
          <View style={styles.headerCard}>
            <LinearGradient
              colors={["#EF4A15", "#eab19e", "#CF2F00", "#E83F0E"]}
              style={styles.background}
              start={[0, 1]}
              end={[1, 0]}
              locations={[0, 0.3, 0.7, 1]}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 12, color: "white" }}>Wedeal</Text>
              <Text style={{ fontSize: 8, color: "white", fontWeight: "bold" }}>
                PREMİUM
              </Text>
            </View>

            <View>
              <Text style={{ fontSize: 8, color: "white" }}>Kart Bakiyesi</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ fontSize: 18, color: "white", fontWeight: "500" }}
                >
                  25.320,50₺
                </Text>

                <Image
                  source={require("@/assets/icons/mastercard.png")}
                  width={50}
                  height={50}
                />
              </View>
            </View>
          </View>
        </View>
      }
    >
      <View style={styles.buttonsContainer}>
        <CustomButton
          title="QR ile öde"
          onPress={() => console.log("Button pressed")}
          iconName="qr-code"
        />
        <CustomButton
          title="Para yükle"
          onPress={() => console.log("Button pressed")}
          iconImage={require("@/assets/icons/add-credit.png")}
        />
      </View>

      <View style={styles.divider}></View>

      <CardInfo />

      <Transactions />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 48,
  },
  headerTitle: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  headerCard: {
    padding: 12,
    overflow: "hidden",
    width: "60%",
    minHeight: 120,
    justifyContent: "space-between",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    flexDirection: "row",
  },
  divider: {
    height: 0.5,
    backgroundColor: "#D0D0D0",
    marginHorizontal: -16,
  },
});
