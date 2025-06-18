 import { useState } from 'react';
import { Text, TextInput, View, Image } from 'react-native';
import card_styles from '../styles/card_styles';
import Dropdown from './dropdown-e-Itens';
import TagsContainer from './tags';
import Icon from '@expo/vector-icons/Ionicons';
import { PrimaryButton, SecondaryButton } from './Button';
import { useCard } from '../context/CardContext';

const CardPrincipal = ({onCancelar}) => {

    const { adicionarCard } = useCard()
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSalvar = () => {
        if (titulo.trim() && descricao.trim()) {
            adicionarCard(titulo, descricao); //passando as props do add do context
            setTitulo('');
            setDescricao('');
            console.log("handleSalvar=true");
            onCancelar();

        }
    };

    return (

        <View style={[card_styles.card_container]}>

            <Header_Card text={titulo} setText={setTitulo} />


            <Body_Card text={descricao} setText={setDescricao} />

            <Footer_Card   onSalvar={handleSalvar} onCancelar={onCancelar}/>

        </View>

    );
};

const Header_Card = (props) => {
    return (
        <View style={card_styles.header}>

            <View style={card_styles.dropdown_container}>
                <TextInput style={card_styles.titulo}
                    placeholder="Descreva o que aconteceu"
                    placeholderTextColor='rgba(250, 250, 250, 1)'
                    maxLength={18} // pq chaves, quando usar chaves?
                    value={props.text} //pq chaves?
                    onChangeText={props.setText} // como queeu posso fazer setText() e parenteses? Ele ta puxando lá de cima? então não preciso fazer os parametros?
                >
                </TextInput>
                <Dropdown />
            </View>

            <View style={card_styles.divisoriaH}></View>
            <View style={card_styles.helper}>
                <View >
                    <Icon name='information-circle-outline' size={20} color={'white'} />
                </View>
                <Text style={card_styles.helper} >O título deve resumir o tipo de infração como, por exemplo ”Assalto” ou "furto".</Text>

            </View>

        </View>
    )
}
const imgPlaceholder = require('../assets/images/ex.jpg');
const Body_Card = (props) => {
    return (

        <View style={card_styles.body}>
            <View style={card_styles.tags}>
                <TagsContainer
                />
            </View>

            <View style={[card_styles.textBox]}><TextInput
                style={[card_styles.descricao]}
                placeholder="Descreva o que aconteceu"
                placeholderTextColor="rgba(250, 250, 250, 1)"
                multiline={true} 
                maxLength={140}  
                value={props.text}
                onChangeText={props.setText} 



            ></TextInput></View>
            <View style={card_styles.media}>
                <Image
                    source={imgPlaceholder}
                    style={{ width: 69, height: 69 }}
                />
                <Image
                    source={imgPlaceholder}
                    style={{ width: 69, height: 69 }}
                />
            </View>
        </View>
    )
}

const Footer_Card = ({ onSalvar,onCancelar }) => {
    return (

        <View style={card_styles.footer}>

            <PrimaryButton label="Cancelar" close={onCancelar}/>
            <SecondaryButton label="Salvar" save={onSalvar} />


        </View>
    )
}
export default CardPrincipal;
