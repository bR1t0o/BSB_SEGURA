import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Icon, MD3Colors} from 'react-native-paper';

// Componente que recebe os dados via props
const TagsContainer = ({ date, time, location }) => {
  return (
    <View style={styles.container}>
      {/* Linha 1 - Data e Hora mais próximas */}
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.tagDate}>
          <Icon source="calendar-month" color="white" size={15.5} />
          <Text style={styles.tagText}>{date || 'DD/MM/AAAA'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tagTime}>
          <Icon source="clock" color="white" size={15.5} />
          <Text style={styles.tagText}>{time || '00:00'}</Text>
        </TouchableOpacity>
      </View>

      {/* Linha 2 */}
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.tagLocation}>
          <Icon source="map-marker-plus" color="white" size={15.5} />
          <Text style={styles.tagText}>{location || 'Localização'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tagMedia}>
          <Icon source="camera" color="white" size={15.5} />
          <Text style={styles.tagText}>Adicionar mídia</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default TagsContainer;

const styles = StyleSheet.create({
  container: {
    width: 333,
    height: 60,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  tagDate: {
    width: 130,
    height: 26,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  tagTime: {
    width: 83,
    height: 26,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginLeft: 20 // Espaço entre data e hora
  },
  tagLocation: {
    width: 150, // Reduzi de 178 para 150
    height: 26,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginRight: 20 // Adicionei margem à direita
  },
  tagMedia: {
    width: 144,
    height: 26,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  tagText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 8,
  },
});