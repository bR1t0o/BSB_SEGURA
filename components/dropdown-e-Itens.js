import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon, MD3Colors } from 'react-native-paper';


const Dropdown = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setVisible(!visible)} style={styles.button}>
        <Icon 
          source="dots-horizontal" 
          color={MD3Colors.neutral100}
          size={24}
        />
      </TouchableOpacity>
      
      {visible && (
        <View style={styles.dropdown}>
          <TouchableOpacity 
            style={styles.item} 
            onPress={() => alert('Editar selecionado')}
          >
            <Text style={styles.text}>Editar</Text>
            <Icon source="pencil" color={MD3Colors.error100} size={15.5} />
          </TouchableOpacity>
          
          <View style={styles.divider} />
          
          <TouchableOpacity 
            style={styles.item} 
            onPress={() => alert('Remover selecionado')}
          >
            <Text style={styles.text}>Excluir</Text>
            <Icon source="trash-can-outline" color={MD3Colors.error100} size={15.5} />
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
    position: 'absolute',
    top: 40, // Distância do botão "⋯"
    right: 0, // Alinha à direita do container pai (ajuste aqui 👇)
    backgroundColor: '#363636',
    borderRadius: 12,
    paddingVertical: 5,
    elevation: 5,
    minWidth: 150, // Largura mínima para os itens
     zIndex: 100, 
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
  divider: {
  borderBottomWidth: 1,
  borderBottomColor: '#646464',
  marginVertical: 0
}
});

export default Dropdown;
