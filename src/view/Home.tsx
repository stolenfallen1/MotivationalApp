import { Text, View } from "react-native";
import Header from "../components/Header";
import Body from "../components/Body";
import Buttons from "../components/Buttons";

export default function Home() {
  return (
    <View>
      <Header />
      <Body />
      <Buttons />
    </View>
  );
}
