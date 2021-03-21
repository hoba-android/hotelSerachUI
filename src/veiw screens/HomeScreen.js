import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "../consts/Colors";
import hotels from "../consts/Hotels";

const HomeScreen = ({ navigation }) => {
  const categories = ["All", "Popular", "Top Rated", "Featured"];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <View style={{ paddingBottom: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {" "}
            Find your hotel
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});
