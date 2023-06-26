import { Pressable, Text, View } from "react-native";
import { useState } from "react";

export default function Body() {
  const [Quote, setQuote] = useState();

  const randomQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((result) => {
        setQuote(result.content);
      });
  };

  return (
    <View
      className="flex justify-center items-center mb-5 bg-gray-200 border-2 border-red-200"
      style={{ width: 350, height: 550 }}
    >
      <Text>{Quote}</Text>
      <View className="absolute bottom-3">
        <Pressable onPress={randomQuote}>
          <Text className="mt-2 px-3 py-2 text-lg bg-red-400">New Quote</Text>
        </Pressable>
      </View>
    </View>
  );
}
