import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { registrarUsuario } from "../../firebase/firebaseRegister";


export default function CriarConta() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const [erroConfirmar, setErroConfirmar] = useState("");
  const router = useRouter();

  const validarCriacao = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let temErro = false;

    if (!emailRegex.test(email)) {
      setErroEmail("E-mail inválido.");
      temErro = true;
    } else {
      setErroEmail("");
    }

    if (senha.length < 6) {
      setErroSenha("A senha deve ter pelo menos 6 caracteres.");
      temErro = true;
    } else {
      setErroSenha("");
    }

    if (senha !== confirmarSenha) {
      setErroConfirmar("As senhas não coincidem.");
      temErro = true;
    } else {
      setErroConfirmar("");
    }

    if (!temErro) {
      const user = await registrarUsuario(email, senha);
      Alert.alert("Conta criada com sucesso!", "Agora você pode fazer login.");
      router.replace("/");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.logoText}>Criar Conta</Text>

        <TextInput
          style={[styles.input, erroEmail ? styles.inputErro : null]}
          placeholder="Email"
          placeholderTextColor="#ffb3b3"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        {erroEmail ? <Text style={styles.erroTexto}>{erroEmail}</Text> : null}

        <TextInput
          style={[styles.input, erroSenha ? styles.inputErro : null]}
          placeholder="Senha"
          placeholderTextColor="#ffb3b3"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
        {erroSenha ? <Text style={styles.erroTexto}>{erroSenha}</Text> : null}

        <TextInput
          style={[styles.input, erroConfirmar ? styles.inputErro : null]}
          placeholder="Confirmar Senha"
          placeholderTextColor="#ffb3b3"
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry
        />
        {erroConfirmar ? (
          <Text style={styles.erroTexto}>{erroConfirmar}</Text>
        ) : null}

        <TouchableOpacity style={styles.loginButton} onPress={validarCriacao}>
          <Text style={styles.loginText}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={styles.ou}>Já tem uma conta?</Text>

        <TouchableOpacity onPress={() => router.replace("/")}>
          <Text style={styles.createAccount}>Voltar para Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5D1F33",
    padding: 20,
  },
  formContainer: {
    backgroundColor: "#2C041C",
    padding: 25,
    borderRadius: 12,
    width: "80%",
    minWidth: 320,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 6,
  },
  logoText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FF6B81",
    marginBottom: 25,
  },
  input: {
    width: "100%",
    paddingVertical: 14,
    paddingHorizontal: 15,
    backgroundColor: "#3E1F2B",
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: "#FF6B81",
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
  inputErro: {
    borderColor: "#FF3B30",
  },
  erroTexto: {
    color: "#FF3B30",
    fontSize: 14,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  loginButton: {
    backgroundColor: "#FF6B81",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    width: "100%",
    shadowColor: "#FF6B81",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  ou: {
    marginVertical: 15,
    color: "#fff",
    fontSize: 14,
  },
  createAccount: {
    color: "#FF6B81",
    fontSize: 16,
    fontWeight: "bold",
  },
});
