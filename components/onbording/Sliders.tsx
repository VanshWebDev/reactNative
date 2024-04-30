import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");

const Sliders = ({ item }: any) => {
  return (
    <View style={styles.view}>
      <Image
        source={item.image}
        style={{ objectFit: "scale-down", height: "40%",}}
      />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );
};

export default Sliders;
const styles = StyleSheet.create({
  view: {
    height: "100%",
    width: width,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  subtitle: {
    color: "#626262",
    textAlign: "center",
    lineHeight: 23,
  },
  title: {
    color: "#000000",
    fontSize: 22,
    textAlign: "center",
  },
});
