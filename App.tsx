import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Test from "./src/components/Header";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View className="flex flex-1 justify-center items-center">
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Test} />
        </Stack.Navigator>
      </NavigationContainer>
      <Test />
      <StatusBar style="auto" />
    </View>
  );
}
