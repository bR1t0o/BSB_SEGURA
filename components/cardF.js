import React, { useState } from 'react';
import {  Text, TextInput, View, } from 'react-native';
import card_styles from '../styles/card_styles';
import { BlurView } from 'expo-blur';
//import { useFonts } from 'expo-font';
//import * as SplashScreen from 'expo-splash-screen'; //basicamente um load-screen
//import BotaoTeste from './butao';
//SplashScreen.preventAutoHideAsync(); // se carregar rapido demais a load screen ainda mostra

const CardPrincipal = () => {

    /*const [loaded, notLoaded] = useFonts({
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf')    //useFonts é um hook que recebe 2 valores e retorna um booleano se conseguiu ou não alcançar o require da fonte

    });*/

    const [text, setText] = useState('');                                  // sintaxe basica do useState: const [estado, setEstado] = useState(valorInicial); 
    const [inputHeight, setinputHeight] = useState(40);                    // como o useState funfa: quando o/um componente renderiza, ele chama o useState e guarda o valor inicial depois, quando o setEstado é chamado, o react atualiza o estado e re-renderiza o componente
                                                                         // o massa do useState é que ele não esquece do estado anterior por que no fundo ele faz tipo uma array que armazena os estados
    /*useEffect(() => {                                                  // o useEffect tmb é um hook que permite  vc sincronizar uma ação com alguma coisa/sistema externo da aplicação. Ele recebe (setup, dependencia) basicamente: SE A DEPENDECIA MUDAR,O SETUP ACONTECE"
        if (loaded || notLoaded) {
            SplashScreen.hideAsync(); //se carregar ou nao, esconde a load-screen
        }

    }, [loaded, notLoaded]); //essas aqui sao as dependencias

    if (!loaded && !notLoaded) {
        return null;
    }*/

    return (
        <BlurView intensity={22} style={[card_styles.card_container]}>

            <View style={card_styles.header}>
                <TextInput style={[card_styles.titulo]} placeholder="Descreva o que aconteceu" placeholderTextColor='rgba(250, 250, 250, 1)'></TextInput>
                <View style={card_styles.divisoriaH}></View>
                <View style={card_styles.helper}>
                    <View style={card_styles.info}></View>
                    <Text style={card_styles.helper}>O título deve resumir o tipo de infração como, por exemplo ”Assalto” ou "furto".</Text>

                </View>

            </View>


            <View style={card_styles.body}>
                <View style={card_styles.tags}></View>

                <View style={[card_styles.textBox, { minHeight: inputHeight }]}><TextInput
                    style={[card_styles.descricao, { height: inputHeight }]} //altura é o inputHeight que vai ser atualizado ali embaixo
                    placeholder="Descreva o que aconteceu"
                    placeholderTextColor="rgba(250, 250, 250, 1)"
                    multiline={true} //pode ter várias linhas
                    maxLength={120}  //caracteres maximos
                    value={text}
                    onChangeText={(value) => setText(value)} //onChangeText é uma prop específica do textInput que é chamado toda vez que vc digita algo; Essa arrow function aí é a mesma coisa que function handleContentSizeChange(event) { setInputHeight(event.nativeEvent.contentSize.height);setInputHeight(event.nativeEvent.contentSize.height);} onContentSizeChange={handleContentSizeChange}
                    onContentSizeChange={(event) =>  //recebe um evento quando o textinput muda
                        setinputHeight(event.nativeEvent.contentSize.height)// atualiza o estado do inputHeight (pega a altura do texto digitado) 
                    }


                ></TextInput></View>
                <View style={card_styles.media}></View>
            </View>

            <View style={card_styles.footer}>
                
                    <View style = {{width:'29%',height:'100%',backgroundColor:'black', borderRadius: 12}} />
                    <View style = {{width:'29%',height:'100%',backgroundColor:'white',borderRadius: 12}}/>
                

            </View>

        </BlurView>
    );
};




export default CardPrincipal;

// como pesquisar duvidas/componentes recentes? demorei muito rpa achar esse boxshadow
// view hell e como estruturar o trabalho com o figma
// como me preocupar com a questão de tablet e aumentar/diminuir a tela?
// como botar o blur por tras do card?
// <TextInput style={card_styles.descricao} /*keyboardType='default'*/ placeholder="Descreva o que aconteceu" placeholderTextColor='rgba(250, 250, 250, 1)' multiline={true} ></TextInput>


/*        PROBLEMAS

A DISTANCIA DA DIVISORIA COM O HELPER NAO TA FUNFANDO
A TELA NÃO TA COMPLETAMENTE DINAMICA, FUTURAMENTE TENHO QUE USAR OU DIMENSIONS OU USEDIMENSIONS PRA FAZER TUDO COM BASE NO TAMANHO DAS TELAS
REFATORAR O CÓDIGO, CADA VIEW PODE E DEVE SER FEITA EM UM COMPONENTE SEPARADO PARA MELHOR LEGIBILIDADE DO CÓDIGO
O BODY TA "DESLOCADO" PARA A DIREITA (PROVAVELMENTE UM PROBLEMA DE PROPORÇÃO DE TELA)
EM ALGUM MOMENTO TROCAR DE EXPO PARA REACT NATIVE PURO, ASSIM PODEMOS BUILDAR O APP JUNTO COM AS FONTES E IMAGENS











*/