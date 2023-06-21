import { Text, View } from "react-native";
import Header from "../components/Header";
import Body from "../components/Body";
import ExtraBtns from "../components/ExtraBtns";

export default function Home() {
  return (
    <View className="flex flex-1 justify-center items-center box-border p-0 m-0">
      <Header />
      <Body />
      <ExtraBtns />
    </View>
  );
}
