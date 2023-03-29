import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../config/firebase";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import Styles from "../utils/style";

export default function LoginScreen({ route, navigation }) {
  const [email, setemail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");

  useEffect(() => {
    if (route.params?.nome) {
      setNome(route.params.nome);
    }
  }, [route.params?.nome]);

  function log() {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredencial) => {
        console.log("Usuário logado com sucesso !!", userCredencial);
        setTimeout(() => {
          navigation.navigate("HomeScreen", { nome, email, senha });
        }, 600);
      })
      .catch((error) => {
        console.log("Usuário inexistente", error);
        const errorCode = error.code;
        if (email === "" || senha === "") {
          console.log("Preencha todos os campos.");
          return;
        }
        if (senha.length <= 6) {
          console.log("A senha precisa ter mais de 6 caracteres");
          return;
        }
        if (errorCode === "auth/invalid-email") {
          console.log("E-mail inválido");
        }
        if (errorCode === "auth/user-not-found") {
          console.log("Usuário não encontrado");
        }
        if (errorCode === "auth/wrong-password") {
          console.log("Senha incorreta");
        }
      });
  }

  return (
    <View style={Styles.container}>
      <View>
        <Text style={Styles.txt}>Faça login para acessar a sua conta</Text>
      </View>
      <View
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
      >
        <View style={{ alignItems: "center" }}>
          <TextInput
            label="E-mail:"
            value={email}
            onChangeText={setemail}
            style={Styles.input}
          />
        </View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <TextInput
            label="Senha:"
            value={senha}
            onChangeText={setSenha}
            style={Styles.input}
            secureTextEntry={true}
          />

          <Button onPress={log} style={Styles.btn}>
            Logar
          </Button>
        </View>
      </View>
    </View>
  );
}
