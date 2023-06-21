import { Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function ExtraBtns() {
  return (
    <View className="flex flex-row justify-center items-center">
      <Pressable className="px-5">
        <AntDesign name="play" size={50} color="black" />
      </Pressable>
      <Pressable className="px-5">
        <FontAwesome5 name="copy" size={50} color="black" />
      </Pressable>
      <Pressable className="px-5">
        <MaterialIcons name="save-alt" size={50} color="black" />
      </Pressable>
    </View>
  );
}
