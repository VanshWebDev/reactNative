import * as React from "react";
import { useState } from "react";
import { GestureResponderEvent, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

interface MyComponentProps {
  isLogin: boolean;
  handleSubmit: (e: GestureResponderEvent) => void;
  isLoading: boolean;
}

const AuthBtn: React.FC<MyComponentProps> = ({
  isLogin,
  isLoading,
  handleSubmit,
}) => {
  return (
    <Button
      style={styles.authBtn}
      mode="elevated"
      loading={isLoading}
      textColor="#fff"
      onPress={handleSubmit}
    >
      {isLogin ? "Login" : "Signup"}
    </Button>
  );
};
export default AuthBtn;

const styles = StyleSheet.create({
  authBtn: { borderRadius: 5, backgroundColor: "#007AEB" },
});
