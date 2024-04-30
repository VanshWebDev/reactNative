
import React from "react";
import {
  Dimensions,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { onbordingSlideData } from "../../constant/onbordingSlideData";
const { width, height } = Dimensions.get("window");

interface OnbordingBtnProps {
  currentSlideIndex: number;
  skip: Function;
  goToNextSlide: Function;
  navigation: any;
}
const OnbordingBtn: React.FC<OnbordingBtnProps> = ({
  currentSlideIndex,
  skip,
  goToNextSlide,
  navigation
}) => {
  return (
    <View
      style={{
        height: height * 0.25,
        justifyContent: "space-between",
        paddingHorizontal: 20,
      }}
    >
      {/* Indicator container */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        {/* Render indicator */}
        {onbordingSlideData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlideIndex == index && {
                backgroundColor: "#e8e8e8",
                width: '15%',
              },
            ]}
          />
        ))}
      </View>

      {/* Render buttons */}
      <View style={{ marginBottom: 20 }}>
        {currentSlideIndex == onbordingSlideData.length - 1 ? (
          <View style={{ height: 50 }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.replace("Auth")}
            >
              <Text>
                GET STARTED
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btn}
              onPress={(event: GestureResponderEvent) => skip(event)}
            >
              <Text>SKIP</Text>
            </TouchableOpacity>
            <View style={{ width: 15 }} />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={(event: GestureResponderEvent) => goToNextSlide(event)}
              style={styles.btn}
            >
              <Text>NEXT</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};
export default OnbordingBtn;

const styles = StyleSheet.create({
  indicator: {
    height: 10,
    width: 10,
    backgroundColor: "#999999",
    marginHorizontal: 3,
    borderRadius: 100,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#e9e9f3",
    justifyContent: "center",
    alignItems: "center",
  },
});
