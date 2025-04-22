import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon, MD3Colors } from 'react-native-paper';


const Dropdown = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}> {/*conteiner dos tres pontinhos*/}
      <TouchableOpacity onPress={() => setVisible(!visible)} style={styles.button}>
        <Text 
          style={styles.icon}>⋯</Text> {/*icone dos tres pontinhos*/}
      </TouchableOpacity>
        {visible && (
        <View 
          style={styles.dropdown}>{/*conteiner dos itens do dropdown*/}
          <TouchableOpacity //botao do Editar
            style={styles.item} 
            onPress={() => alert('Editar selecionado')}>{/*aciona o Editar quando pressionado*/}
            <Text 
              style={styles.text}>Editar</Text>
            <Icon
              style={styles.lapis}
              source="pencil"
              color={MD3Colors.error100}
              size={15.5}
            />
          </TouchableOpacity>
          <View 
            style={{
            borderBottomWidth: 1,
            borderBottomColor: '#646464',
            marginVertical: 0
            }} />
          <TouchableOpacity //botao do Remover
            style={styles.item} 
            onPress={() => alert('Remover selecionado')}>{/*aciona o Remover quando pressionado*/}
            <Text style={styles.text}>Excluir</Text>
            <Icon 
              source="trash-can-outline"
              color={MD3Colors.error100}
              size={15.5}          
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center', 
    alignItems: 'flex-start',
  },
  button: {
    padding: 10,
  },
  icon: {
   fontWeight: "bold", 
    fontSize: 20,
    textAlign: 'center',
  },
  dropdown: {
    position: 'absolute', //editar a partir daqui para alterar a posição do dropdown
    top: 40, 
    //explicação: a coordenada do dropdown esta presa em relação à pagina e não a um outro conteiner
    //o ideal seria prender suas coordenadas à um outro conteiner
    left: '-25%', //editar ate aqui para o posicionamento
    backgroundColor: '#363636',
    elevation: 5,
    borderRadius: 12,
    paddingVertical: 5,
  },
  item: {
    width: 136,
    height: 34,
    justifyContent: 'space-between',  
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 12,
    color: '#fff'
  },
});

export default Dropdown;
