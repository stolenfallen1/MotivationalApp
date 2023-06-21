import { Text, View } from "react-native";

export default function WelcomePage() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-bold text-5xl tracking-tighter">
        Your daily quote generator
      </Text>
    </View>
  );
}
