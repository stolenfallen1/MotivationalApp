import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Test from "./src/components/Header";

export default function App() {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Test />
      <StatusBar style="auto" />
    </View>
  );
}
