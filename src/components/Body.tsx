import { Pressable, Text, View } from "react-native";

export default function Body() {
  return (
    <View
      className="flex justify-center items-center m-5 bg-gray-200 border-2 border-red-200"
      style={{ width: 350, height: 550 }}
    >
      <Text>TEST</Text>
      <View className="absolute bottom-3">
        <Pressable>
          <Text className="mt-2 px-3 py-2 text-lg bg-red-400">New Quote</Text>
        </Pressable>
      </View>
    </View>
  );
}
