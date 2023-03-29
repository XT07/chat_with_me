import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import auth from "../config/firebase";
import Styles from "../utils/style";

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function Register() {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredencial) => {
        console.log("Usuário criado com sucesso", userCredencial);
        navigation.navigate("LoginScreen", { nome });
      })
      .catch((error) => {
        console.log("Erro ao criar o usuário", error);

        const errorCode = error.code;
        if (errorCode === "auth/weak-password") {
          console.log("Senha muito fraca!");
        }

        if (errorCode === "auth/email-already-in-use") {
          console.log("E-mail já cadastrado!");
        }

        if (errorCode === "auth/invalid-email") {
          console.log("E-mail inválido!");
        }
      });
  }
  return (
    <View style={Styles.container}>
      <View>
        <Text style={Styles.txt}>Crie a sua conta</Text>
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
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <TextInput
              label="E-mail:"
              value={email}
              onChangeText={setEmail}
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
            <Button onPress={Register} style={Styles.btn}>
              Registrar-se
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}
