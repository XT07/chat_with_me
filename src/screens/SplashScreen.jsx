import { View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import Styles from "../utils/style";

export default function SplashScreen({ navigation }) {
  setTimeout(() => {
    navigation.navigate("MyTabs");
  }, 3000);
  return (
    <View style = {Styles.splash}>
      <ActivityIndicator />
      <Text>Aguarde um instante ...</Text>
    </View>
  );
}
