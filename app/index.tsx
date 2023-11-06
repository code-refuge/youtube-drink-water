import { Text, View } from "react-native";
import { generateRandomColorHexadecimal } from "../src/routes/routes";

export default function Page() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: generateRandomColorHexadecimal(),
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{Math.random()}</Text>
    </View>
  );
}
