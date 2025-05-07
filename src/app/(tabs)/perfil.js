import {useState} from "react";
import { StyleSheet, Text, View, Image, Pressable, TextInput} from "react-native";
import fotoPerfil from '../../../assets/images/fotostock.jpeg';
import iconeEditar from '../../../assets/icons/icons8-edit.png';
import iconeSubmit from "../../../assets/icons/icons8-done-48.png";

export default function Perfil() {

  const [isEditando, setEditando] = useState(false);
  const [nome, setNome] = useState("Emily Brow");

  const toggleEditando = () =>{
    if(isEditando == false) setEditando(true);
    else setEditando(false);
  }

// Depois preciso ver como passar o novo nome para o setNome().
  const onChangeNome = () => {
    setNome(novoNome);
  }


  return (
    <View style={styles.container}>
      <View style={styles.barraDoTopo}></View>
      <FotoENome nome={nome}/>
      <DadosPessoaisEBotaoDeEdicao iseditando={isEditando} toggleeditando={toggleEditando}/>
      <Dados iseditando={isEditando} nome={nome} setNome={setNome}/> 
    </View>
  );
}

const FotoENome = (nome) => {

  return(
    <View style={styles.containerTopo}>
      <Image style={styles.foto} source={fotoPerfil} />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={{ borderBottomWidth: 1, color: "#251351", borderColor: "#251351", fontSize: 12, }}>Alterar foto</Text>
    </View>
  )
}


const DadosPessoaisEBotaoDeEdicao = (iseditando, toggleeditando) => {

  return(
    <View style={styles.containerDadosPessoaisEBotaoDeEdicao}>
      <Text style={{ fontSize: 16, color: "#251351", fontWeight: 500 }}>Dados pessoais</Text>
      <BotaoDeEdicao iseditando={iseditando} toggleeditando={toggleeditando}/>
    </View>
  )
}

const Dados = (iseditando, nome, setNome) =>{

  return(
    <View style={styles.containerDados}>
      <Text style={styles.campos}>Nome completo</Text>
      <TextInput 
        style={styles.dados}
        value={nome}
        // alterar essa parte. O valor de nome deve mudar ao clicar no botão de edição para confirmar e não onBlur.
        onBlur={setNome}
        editable={iseditando}
      />
      <Text style={styles.campos}>Email</Text>
      <Text style={styles.dados}>emily@email.com</Text>
      <Text style={styles.campos}>Senha</Text>
      <Text style={styles.dados}>********</Text>
    </View>
  );
}


const BotaoDeEdicao = (iseditando, toggleeditando) =>{
  let imagem; 
  if(iseditando == false) imagem = iconeEditar;
  else imagem = iconeSubmit;
  // ficou meio confuso descer tanto esses iseditando e toggleeditando.

  return(
    <Pressable onPress={toggleeditando}>
      <Image style={styles.icon} source={imagem} />
    </Pressable>
  )
}


const IMAGE_SIZE = 128;


const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  containerTopo: {
    display: "flex",
    flex: 3,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
    rowGap: 5,
    backgroundColor: 'white',
    zIndex: 1,
  },
  containerDadosPessoaisEBotaoDeEdicao: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },
  containerDados: {
    display: "flex",
    flex: 4,
    rowGap: 5,
    margin: 10,
  },
  barraDoTopo: {
    backgroundColor: "#251351",
    paddingTop: IMAGE_SIZE / 2 + 10,
    zIndex: 0,
  },
  containerBaixo: {
    display: "flex",
    backgroundColor: "#251351",
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between'
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
  icon: {
    backgroundColor: "#DED5F3",
    borderRadius: 100,
  },
  dados: {
    backgroundColor: "#F0F0F0",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#C0C0C0C0",
    paddingTop: 10,
    paddingRight: 12,
    paddingBottom: 10,
    paddingLeft: 12,
  },
  campos: {
    fontSize: 12,
    marginLeft: 10,
    marginTop: 10,
  },
  botao: {
    padding: 10,
   flex:1
 }
});


