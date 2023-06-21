import { ImageBackground, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const bg = require("../Image/welcomeBG.jpeg");

type WelcomePageNavigationProp = StackNavigationProp<{ Quotes: undefined }>;

export default function WelcomePage() {
  const navigation = useNavigation<WelcomePageNavigationProp>();

  const redirectToHome = (): void => {
    // Navigate to the Home Screen
    navigation.navigate("Quotes");
  };

  return (
    <View className="flex-1 justify-center items-center">
      <ImageBackground
        source={bg}
        resizeMode="cover"
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text className="font-bold text-white text-5xl tracking-tighter text-center">
            Your daily dose of motivation
          </Text>
          <Pressable onPress={redirectToHome}>
            <Text className="mt-5 px-3 py-2 text-2xl font-bold tracking-tight bg-red-400">
              Get started
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
