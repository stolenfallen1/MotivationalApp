import { Pressable, Text, View } from "react-native";

export default function WelcomePage() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-bold text-5xl tracking-tighter text-center">
        Your daily dose of motivation
      </Text>
      <Pressable>
        <Text className="mt-5 px-3 py-2 text-2xl tracking-tight bg-red-400">
          Get started
        </Text>
      </Pressable>
    </View>
  );
}
