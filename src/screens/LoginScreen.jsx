import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import Styles from "../utils/style";

export default function LoginScreen() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  function log() {
    signInWithNameAndPassword(auth, nome, senha)
      .then((userCredencial) => {
        console.log("Usuário logado com sucesso !!", userCredencial);
        Navigation.navigate("HomeScreen");
      })
      .catch((error) => {
        console.log("Erro ao criar usuário", error);
        const errorCode = error.code;
        if (nome === "" || senha === "") {
          console.log("Preencha todos os campos.");
          return;
        }
        if (senha.length <= 6) {
          console.log("A senha precisa ter mais de 6 caracteres");
          return;
        }
        if (errorCode === "auth/invalid-nome") {
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
            label="Nome:"
            value={nome}
            onChangeText={setNome}
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

          <Button onPress={log}>Logar</Button>
        </View>
      </View>
    </View>
  );
}
