import { NavigationContainer } from "@react-navigation/native";
import Auth from "./pages/auth/Auth";
import { createStackNavigator } from "@react-navigation/stack";
import Onbording from "./pages/onbording/Onbording";
import { StatusBar } from "react-native";
import "react-native-gesture-handler";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onbording"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Onbording"
          component={Onbording}
          options={{ title: "Rewise" }}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ title: "Auth" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
