import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

//Botão Primário (Ação Principal) 
const PrimaryButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
      <Text style={styles.primaryText}>{title}</Text>
    </TouchableOpacity>
  );
};

//Botão Secundário  
const SecondaryButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.secondaryButton} onPress={onPress}>
      <Text style={styles.secondaryText}>{title}</Text>
    </TouchableOpacity>
  );
};

//Botão Flutuante (Usado para adicionar algo) 
const FloatingButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
      <Ionicons name="add" size={28} color="white" />
    </TouchableOpacity>
  );
};

//Botão de Alternância (Toggle) 
const ToggleButton = ({ option1, option2 }) => {
  const [selected, setSelected] = useState(option1);

  return (
    <TouchableOpacity
      style={[styles.toggleButton, selected === option2 && styles.activeToggle]}
      onPress={() => setSelected(selected === option1 ? option2 : option1)}
    >
      <Text style={[styles.toggleText, selected === option2 && styles.activeToggleText]}>
        {selected}
      </Text>
    </TouchableOpacity>
  );
};

//Botão de Filtro (Usado para filtragem de dados) 
const FilterButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.filterButton} onPress={onPress}>
      <Ionicons name="filter" size={18} color="white" />
      <Text style={styles.filterText}>{title}</Text>
    </TouchableOpacity>
  );
};

//Botão de Voltar (Usado para navegação)
const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={24} color="#6D3B9F" />
    </TouchableOpacity>
  );
};

//Estilos
const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: '#6D3B9F',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#6D3B9F',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  secondaryText: {
    color: '#6D3B9F',
    fontSize: 16,
    fontWeight: 'bold',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#6D3B9F',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  toggleButton: {
    backgroundColor: '#DDD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  toggleText: {
    color: '#333',
    fontSize: 16,
  },
  activeToggle: {
    backgroundColor: '#6D3B9F',
  },
  activeToggleText: {
    color: 'white',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6D3B9F',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  filterText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 8,
  },
  backButton: {
    padding: 10,
  },
});

//Exportação de todos os botões 
export { PrimaryButton, SecondaryButton, FloatingButton, ToggleButton, FilterButton, BackButton };
