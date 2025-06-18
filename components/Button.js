
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const PrimaryButton = ({ label = "Button label",close }) => {
  return (
    <TouchableOpacity style={styles.primaryButton} onPress={close}>


      <Text style={styles.buttonTextPrimary}>{label}</Text>


    </TouchableOpacity>
  );
};

export const SecondaryButton = ({ label = "Button label", save }) => {
  return (
    <TouchableOpacity style={styles.secondaryButton} onPress={save}>

      <Text style={styles.buttonTextSecondary}>{label}</Text>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({


  buttonTextPrimary: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(250, 250, 250, 1)'
  },
  buttonTextSecondary: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(8, 8, 8, 1)'
  },

  primaryButton: {
    width: 80,
    minHeight: 34,
    backgroundColor: 'transparent',
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'rgba(192, 192, 192, 1)',


  },

  
  secondaryButton: {
    width: 62,
    minHeight: 34,
    backgroundColor: 'rgba(206, 206, 206, 1)',
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 12,


    borderWidth: 1,
    borderColor: 'rgba(192, 192, 192, 1)',
  },
});


