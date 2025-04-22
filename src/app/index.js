import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import {useRouter} from "expo-router";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const router = useRouter();
  const validarLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let temErro = false;

    // Validação do e-mail
    if (!emailRegex.test(email)) {
      setErroEmail("E-mail inválido.");
      temErro = true;
    } else {
      setErroEmail("");
    }

    // Validação da senha
    if (senha.length < 6) {
      setErroSenha("A senha deve ter pelo menos 6 caracteres.");
      temErro = true;
    } else {
      setErroSenha("");
    }

    if (!temErro) {
      Alert.alert("Sucesso", "Login realizado!");
      router.push("/principal");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.logoText}>Login</Text>

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

        <View style={styles.forgotContainer}>
          <Text style={styles.forgotText}>Esqueceu a senha?</Text>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={validarLogin}>
          <Text style={styles.loginText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.ou}>Ou</Text>

        <TouchableOpacity>
          <Text style={styles.createAccount}>Criar conta</Text>
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
  forgotContainer: {
    alignSelf: "flex-end",
    marginBottom: 15,
  },
  forgotText: {
    color: "#FF6B81",
    fontSize: 14,
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
