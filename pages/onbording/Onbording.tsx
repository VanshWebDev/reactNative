import FirstOnbording from "../../components/onbording/FirstOnbording"
import React from "react";
import { Alert, Button, Pressable, Text, View, ViewBase } from "react-native";



export default function Onbording({navigation}:any) {
  return (
    <FirstOnbording navigation={navigation}/>
  );
}
