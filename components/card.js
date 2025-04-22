import { StyleSheet,  TextInput, View, useWindowDimensions } from 'react-native';
import card_styles from '../styles/card_styles';
import { BlurView } from 'expo-blur';





const CardSecundario = () => {

    
    const { width: largura, height: altura } = useWindowDimensions();



    return (
        //<BlurView intensity={90}>

        <BlurView intensity={22} style={[getStyle(largura, altura).container]}>

            <View style={card_sec.header}><TextInput style={[card_styles.titulo]} placeholder="Insira um título" placeholderTextColor='rgba(250, 250, 250, 1)'/></View>
            <View style={card_sec.body}>

                <View style={card_sec.tags}></View>
                <View style={[card_sec.textBox, { borderRadius: Math.min(largura, altura) * 0.036 }]}>
                    <TextInput
                        style={[card_styles.descricao]} //altura é o inputHeight que vai ser atualizado ali embaixo
                        placeholder="Descreva o que aconteceu"
                        placeholderTextColor="rgba(250, 250, 250, 1)"
                        multiline={true} //pode ter várias linhas
                        maxLength={210}  //caracteres maximos
                        />


                </View>
                <View style={card_sec.media}></View>
            </View>
        </BlurView>
       // </BlurView>
        
    );
};


/*const Container = () => {

    const { width: largura, height: altura } = useWindowDimensions();

    return (
        <View style={getStyle(largura, altura).container} />

    );
};*/

//const Header = () => {
//  return (
//    <View style={card_styles.header}> {/* Aqui, estamos usando o estilo header */}
//      <Text style={card_styles.titulo}>Header do Card</Text>
//</View>
//);
//};



function getStyle(largura, altura) {
    return StyleSheet.create({
        container: {

            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            width: largura * 0.88,
            height: altura * 0.34,
            paddingVertical: largura * 0.0438,
            paddingBottom: largura * 0.0438,
            borderRadius: largura * 0.0658,
            gap: largura * 0.038,
            boxShadow: '0 4 12 0 rgba(0,0,0,0.5)',
            overflow: 'hidden'

        },

    });
}

const card_sec = StyleSheet.create({

    
    header: {

        width: '91%',
        height: 50,
        gap: '2.19%',
        alignSelf: 'center',
       // backgroundColor: 'rgba(0, 0, 0, 0.15)'//teste visual

    },
    body: {
        flex: 1,
        width: '91%',
        height: '76.4%', //botar limite de letras
        gap: '6.6%',
        alignSelf: 'center',
        //backgroundColor: 'rgb(233, 6, 6)'

    },
    tags: {
        // flex: 1,
        height: '25%',
        width: '100%',
        backgroundColor: 'green',
        width: '100%',
        alignSelf: 'center'
    },
    textBox: {

        //flex: 1,
        //minWidth: 333,
        height: '33%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderWidth: 1,
        borderColor: 'rgba(192, 192, 192, 1)',
        alignSelf: 'center',



    },
    media: {
        //flex: 1,
        height: '29%',
        width: '100%',
        backgroundColor: 'blue',
        width: '100%',
        alignSelf: 'center'
    },
});

export default CardSecundario;

