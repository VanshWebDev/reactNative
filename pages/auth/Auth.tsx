import { Alert, Button, Text, View } from "react-native";

import { styles } from "../../styles/Auth/login";
import AuthForm from "../../components/auth/AuthForm";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useEffect, useState } from "react";
// import {NativeStackScreenProps} from "@react-navigation/native-stack"
// 7713290769-jc2hdj4ndrg830ua1otub83jdu4hmfbo.apps.googleusercontent.com
// type HomeProp = NativeStackScreenProps<T>()

WebBrowser.maybeCompleteAuthSession();
export default function Auth() {
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    androidClientId:
      "7713290769-jc2hdj4ndrg830ua1otub83jdu4hmfbo.apps.googleusercontent.com",
    scopes: ["profile", "email"],
  });
  useEffect(() => {
    if (response?.type == "success") {
      setAccessToken(response.authentication.accessToken);
      accessToken && fetchUserInfo()
    }
  }, [response, accessToken]);

  async function fetchUserInfo() {
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: {Authorization: `Bearer ${accessToken}`},
    });
    let userInfo = await response.json();
    setUser(userInfo);
  }
  return (
    <View style={styles.container}>
      <AuthForm />
      {user === null  && 
      <Button onPress={()=>{promptAsync();}} title="google"/>
      }
    </View>
  );
}
