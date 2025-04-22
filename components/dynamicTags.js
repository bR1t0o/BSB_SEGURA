import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import {Icon, MD3Colors} from 'react-native-paper';

const screenWidth = Dimensions.get('window').width;
const CONTAINER_SIZE = 50; // Tamanho de cada contêiner
const MARGIN = 8; // Margem entre os contêineres

const Tag = ({ text, onPress, iconName }) => {
  return (
    <TouchableOpacity style={styles.styleTag} onPress={onPress}>
      <Icon 
        style={styles.lapis}
        source={iconName}
        color={MD3Colors.error100}
        size={15.5} >
      </Icon>
      <Text style={{color: 'white', paddingHorizontal: 8}}>{text}</Text>
    </TouchableOpacity>
  );
};

const DynamicContainer = () => {
  const [items] = useState([]);

  const calculateRows = () => {
    const itemsPerRow = Math.floor(screenWidth / (CONTAINER_SIZE + MARGIN * 2));
    return Math.ceil(items.length / itemsPerRow);
  };

  return (
    <View style={styles.containerWrapper}>
      <View style={{width: 333, backgroundColor: '#000', flexDirection: 'row', flexWrap: 'wrap',
          height: calculateRows() * (CONTAINER_SIZE + MARGIN * 2),}}>

          {items.map((_, index) => (
            <View key={index} style={styles.item} />))}

          <Tag text="DD/MM/AAAA" iconName={"calendar-month"}
          onPress={() => alert('Remover selecionado')}>
          </Tag>
          <Tag text="00:00" iconName={"clock"}
          onPress={() => alert('Remover selecionado')}>
          </Tag>
          <Tag text="Adicionar localização" iconName={"map-marker-plus"}
          onPress={() => alert('Remover selecionado')}>
          </Tag>
          <Tag text="Adicionar mídia" iconName={"camera"}
          onPress={() => alert('Remover selecionado')}></Tag>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerWrapper: {
    alignItems: 'center',
    marginTop: 20,
  },
  styleTag: {
    height: 26,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "flex-start", // Ajusta ao tamanho do texto
    justifyContent: 'space-between',  
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
    backgroundColor: '#000000',
    margin: MARGIN,
  },

});

export default DynamicContainer;