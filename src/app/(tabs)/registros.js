import { StyleSheet, Button, View, Text } from "react-native";
import CardPrincipal from "../../../components/cardF";
import CardSecundario from "../../../components/card";

export default function Registros() {

    return (
        <View style={style.t_container}>
            <CardSecundario></CardSecundario>
            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 20, color: 'black' }}>
      Exemplo do card secundário
    </Text>
        </View>
    )
}
const style = StyleSheet.create({

    t_container: {

        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'




    },






});
