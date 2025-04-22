import { StyleSheet } from 'react-native';

const card_styles = StyleSheet.create({
    // card_container vai ser um view
    card_container: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        //flex: 1,
        width: '88.6%',
        height: '48%',
        minWidth: 365,
        minHeight: 427,
        padding: '4.38%',
        borderRadius: '6.58%',
        gap: '6.58%',
        boxShadow: '0 4 12 0 rgba(0,0,0,0.5)',
    },
    info: {
        width: '4.8%',
        height: '53.3%',
        borderRadius: '100%',
        backgroundColor: 'red',
        alignSelf: 'center'

    },
    // header vai ser outro view
    header: {
        minWidth: 333,
        //minHeight: 72, //botar limite de letras
        width: '91%',
        height: '18.8%',
        maxHeight: '18%',
        gap: '2.19%',
        //backgroundColor: 'rgba(0, 0, 0, 0.15)'//teste visual

    },
    titulo: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20, //é pra ser 20
        color: 'rgba(250, 250, 250, 1)',
        flex: 1


    },
    divisoriaH: {

        borderBottomWidth: 1,
        borderBottomColor: 'rgba(192, 192, 192, 1)',
        alignContent: 'center',


    },
    helper: {
        flex: 1,
        flexDirection: 'row',
        gap: '2.4%',
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        color: 'rgba(250, 250, 250, 1)'

    },
    //outra view
    body: {
        minWidth: 333,
        minHeight: 241,
        width: '91%',
        height: '56.4%', //botar limite de letras
        gap: '4.4%',
        //  backgroundColor: 'rgb(233, 6, 6)'
    },

    tags: {
        flex: 1,
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
        borderRadius: Math.min(333, 241) * 0.036 //isso num adianta nada, ainda não é dinamico, mas a ideia ta correta.


    },
    descricao: {

        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        color: 'rgba(250, 250, 250, 1)',
        // flex: 1   por que se eu botar flex 1 aqui ele centraliza o texto?
        margin: '2%',
        lineHeight: 30,
        //PRA props tipo maxLenght ou palceholder= y eu tenho que sempre declarar-los no próprio componente?
        textAlignVertical: 'top',




    },

    media: {
        flex: 1,


        backgroundColor: 'blue',
        width: '100%',
        alignSelf: 'center'
    },
    //outra view
    footer: {
        //minWidth: 333,
        //minHeight: 34,
        width: '100%',
        height: '8%',
        gap: '3%',
      
        //backgroundColor: 'rgb(255, 255, 255)',
        flexDirection:'row',
        justifyContent:'flex-end'
        //justifyContent: 'flex-end'

        //aqui eu tenho que ter as tags
        //media nao vai ter por enquanto
    },
    /*footer: {  //ISSO AQUI FOI COM O BOTAO DO CHATGPT
        width: '100%',
        height: '8%',
        flexDirection: 'row', // Alinha os botões na horizontal
        justifyContent: 'flex-end', // Joga os botões para o canto direito
        alignItems: 'center', // Centraliza verticalmente
        gap: 10, // Espaço entre os botões
       // backgroundColor: 'rgb(255, 255, 255)', // Apenas para visualização
        paddingHorizontal: 10, // Dá um espacinho das bordas
    },*/
    
    teste: {
        backgroundColor:'red',
        width:30,
        height:30
    
    }

});
export default card_styles;