import { Pressable, Text, View } from "react-native";

export default function Body() {
  return (
    <View
      className="flex justify-center items-center m-5 bg-gray-200 border-2 border-red-200"
      style={{ width: 350, height: 550 }}
    >
      <Text>TEST</Text>
      <Pressable>
        <Text>New Quote</Text>
      </Pressable>
    </View>
  );
}
