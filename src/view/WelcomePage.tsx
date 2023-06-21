import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type WelcomePageNavigationProp = StackNavigationProp<{ Home: undefined }>;

export default function WelcomePage() {
  const navigation = useNavigation<WelcomePageNavigationProp>();

  const redirectToHome = (): void => {
    // Navigate to the Login screen
    navigation.navigate("Home");
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-bold text-5xl tracking-tighter text-center">
        Your daily dose of motivation
      </Text>
      <Pressable onPress={redirectToHome}>
        <Text className="mt-5 px-3 py-2 text-2xl tracking-tight bg-red-400">
          Get started
        </Text>
      </Pressable>
    </View>
  );
}
