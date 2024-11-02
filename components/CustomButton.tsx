import { useColorScheme } from "@/hooks/useColorScheme";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  iconName?: keyof typeof Ionicons.glyphMap;
  iconImage?: ImageSourcePropType;
};

export default function CustomButton({
  title,
  onPress,
  iconName,
  iconImage,
}: CustomButtonProps) {
  const colorScheme = useColorScheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: Colors[colorScheme ?? "light"].tint,
          borderColor: Colors[colorScheme ?? "light"].tint,
        },
        styles.button,
      ]}
    >
      {iconName && <Ionicons name={iconName} size={20} color={"white"} />}
      {iconImage && (
        <Image source={iconImage} style={{ width: 20, height: 20 }} />
      )}

      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
