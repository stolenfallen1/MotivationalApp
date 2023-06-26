import { Pressable, Text, View } from "react-native";
import { useState, useEffect } from "react";

export default function Body() {
  const [Quote, setQuote] = useState();
  const [Author, setAuthor] = useState();

  const randomQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((result) => {
        setQuote(result.content);
        setAuthor(result.author);
      });
  };

  useEffect(() => {
    randomQuote();
  }, []);

  return (
    <View
      className="flex justify-center items-center mb-5 bg-gray-200 border-2 border-red-200"
      style={{ width: 350, height: 550 }}
    >
      <Text className="text-xl px-5 text-justify mb-10">{Quote}</Text>
      <Text className="text-lg font-bold italic">- {Author}</Text>
      <View className="absolute bottom-3">
        <Pressable onPress={randomQuote}>
          <Text className="mt-2 px-3 py-2 text-lg bg-red-400">New Quote</Text>
        </Pressable>
      </View>
    </View>
  );
}
