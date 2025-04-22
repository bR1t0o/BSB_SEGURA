import { StyleSheet, View, Text} from "react-native";
import CardPrincipal from "../../../components/cardF";

export default function Principal() {
    return (
        <View style={style.t_container}>
        <CardPrincipal></CardPrincipal>
        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 20, color: 'black' }}>
            Exemplo do card primário
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
