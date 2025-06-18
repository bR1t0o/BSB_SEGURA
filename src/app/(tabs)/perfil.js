import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Pressable, TextInput } from "react-native";

import fotoPerfil from '../../../assets/images/fotostock.jpeg';
import iconeEditar from '../../../assets/icons/icons8-edit.png';
import iconeSubmit from "../../../assets/icons/icons8-done-48.png";

export default function Perfil() {
  const [isEditando, setEditando] = useState(false);
  const [nome, setNome] = useState("Emily Brow");
  const [novoNome, setNovoNome] = useState(nome);

  useEffect(() => {
    setNovoNome(nome);
  }, [nome]);

  const toggleEditando = () => {
    if (isEditando) {
      setNome(novoNome); // salva o novo nome ao sair do modo de edição
    }
    setEditando(!isEditando);
  };

  return (
    <View style={styles.container}>
      <View style={styles.barraDoTopo} />
      <FotoENome nome={nome} />
      <DadosPessoaisEBotaoDeEdicao iseditando={isEditando} toggleeditando={toggleEditando} />
      <Dados iseditando={isEditando} nome={novoNome} setNovoNome={setNovoNome} />
    </View>
  );
}

const FotoENome = ({ nome }) => (
  <View style={styles.containerTopo}>
    <Image style={styles.foto} source={fotoPerfil} />
    <Text style={styles.nome}>{nome}</Text>
    <Text style={styles.alterarFoto}>Alterar foto</Text>
  </View>
);

const DadosPessoaisEBotaoDeEdicao = ({ iseditando, toggleeditando }) => (
  <View style={styles.containerDadosPessoaisEBotaoDeEdicao}>
    <Text style={styles.titulo}>Dados pessoais</Text>
    <BotaoDeEdicao iseditando={iseditando} toggleeditando={toggleeditando} />
  </View>
);

const BotaoDeEdicao = ({ iseditando, toggleeditando }) => {
  const imagem = iseditando ? iconeSubmit : iconeEditar;
  return (
    <Pressable onPress={toggleeditando}>
      <Image style={styles.icon} source={imagem} />
    </Pressable>
  );
};

const Dados = ({ iseditando, nome, setNovoNome }) => (
  <View style={styles.containerDados}>
    <Text style={styles.campos}>Nome completo</Text>
    <TextInput
      style={styles.dados}
      value={nome}
      onChangeText={setNovoNome}
      editable={iseditando}
    />
    <Text style={styles.campos}>Email</Text>
    <Text style={styles.dados}>emily@email.com</Text>
    <Text style={styles.campos}>Senha</Text>
    <Text style={styles.dados}>********</Text>
  </View>
);

const IMAGE_SIZE = 128;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  barraDoTopo: {
    backgroundColor: "#251351",
    paddingTop: IMAGE_SIZE / 2 + 10,
  },
  containerTopo: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 5,
    backgroundColor: "white",
  },
  foto: {
    borderRadius: 100,
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    borderColor: "#251351",
    borderWidth: 4,
  },
  nome: {
    fontSize: 20,
    color: "#251351",
  },
  alterarFoto: {
    borderBottomWidth: 1,
    color: "#251351",
    borderColor: "#251351",
    fontSize: 12,
  },
  containerDadosPessoaisEBotaoDeEdicao: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },
  titulo: {
    fontSize: 16,
    color: "#251351",
    fontWeight: "500",
  },
  icon: {
    backgroundColor: "#DED5F3",
    borderRadius: 100,
    width: 32,
    height: 32,
  },
  containerDados: {
    flex: 4,
    rowGap: 5,
    margin: 10,
  },
  campos: {
    fontSize: 12,
    marginLeft: 10,
    marginTop: 10,
  },
  dados: {
    backgroundColor: "#F0F0F0",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#C0C0C0C0",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});
