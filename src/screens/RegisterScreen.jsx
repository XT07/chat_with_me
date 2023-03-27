import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function RegisterScreen(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function Register(){
        createUserWithEmailAndPassword(auth, nome, senha)
            .then((userCredencial) => {
                console.log("Usuário criado com sucesso");
                Navigation.navigate('LoginScreen');
            })
            .catch((error) =>   {
                console.log("Erro ao criar o usuário", error);
                
            })
    }
    return(
        <View style={Styles.container}>
            <View>
                <Text style={Styles.txt}>Crie a sua conta {nome}</Text>
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
                    <View style={{ alignItems: "center" }}>
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
                        <Button onPress={Register}>Registrar-se</Button>
                    </View>
                </View>
            </View>
        </View>
    )
}