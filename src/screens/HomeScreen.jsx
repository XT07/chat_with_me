import { useState } from "react";
import { useEffect } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import Styles from "../utils/style";

export default function HomeScreen({ route, navigation }) {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  useEffect(
    () => {
      if (route.params?.nome) {
        setNome(route.params.nome);
      }
      if (route.params?.email) {
        setEmail(route.params.email);
      }
      if (route.params?.senha) {
        setSenha(route.params.senha);
      }
    },
    [route.params?.nome],
    [route.params?.email],
    [route.params?.senha]
  );

  setTimeout(() => {
    if (email === "" || senha === "") {
      console.log("Faça login para ir para a HomeScreen");
      navigation.navigate("LoginScreen");
    }
  }, 30);

  return (
    <View style={Styles.container}>
      <Text style={Styles.txt}>Sejá bem vindo {nome}</Text>
    </View>
  );
}
