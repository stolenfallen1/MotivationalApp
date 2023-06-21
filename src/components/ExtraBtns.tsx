import { Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function ExtraBtns() {
  return (
    <View>
      <Pressable>
        <AntDesign name="play" size={24} color="black" />
      </Pressable>
      <Pressable>
        <FontAwesome5 name="copy" size={24} color="black" />
      </Pressable>
      <Pressable>
        <MaterialIcons name="save-alt" size={24} color="black" />
      </Pressable>
    </View>
  );
}
