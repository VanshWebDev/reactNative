
import React from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import OnbordingBtn from "./OnbordingBtn";
import Sliders from "./Sliders";
import { onbordingSlideData } from "../../constant/onbordingSlideData";

const { width, height } = Dimensions.get("window");

const COLORS = { primary: "#282534", white: "#fff" };


const OnboardingScreen = ({ navigation }: any) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref:any = React.useRef();
  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != onbordingSlideData.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = onbordingSlideData.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };


  return (
    <SafeAreaView style={{ backgroundColor: "#ffffff", height: "100%" }}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: "100%" }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={onbordingSlideData}
        pagingEnabled
        renderItem={({ item }) => <Sliders item={item} />}
      />
      <OnbordingBtn currentSlideIndex={currentSlideIndex} skip={skip} goToNextSlide={goToNextSlide} navigation={navigation}/>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
