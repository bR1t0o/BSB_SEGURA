import { StyleSheet, TextInput, View, useWindowDimensions, FlatList, Pressable,Image } from 'react-native';
import card_styles from '../styles/card_styles';
import Dropdown from './dropdown-e-Itens';
import TagsContainer from './tags';
import { useCard } from '../context/CardContext.js';

const imgPlaceholder = require('../assets/images/ex.jpg');


const CardItem = ({ item }) => {

    const { removerCard } = useCard();
    const { width: largura, height: altura } = useWindowDimensions();


    return (

        <Pressable onLongPress={() => { removerCard(item.id)}}>
            <View style={[getStyle(largura, altura).container]}>

                <View style={card_sec.header}><TextInput
                    style={[card_styles.titulo]}
                    placeholder="Insira um título"
                    placeholderTextColor='rgba(250, 250, 250, 1)'
                    value={item.titulo}
                    editable={false} />
                    <Dropdown />
                </View>
                <View style={card_sec.body}>

                    <View style={card_sec.tags}>
                        <TagsContainer />
                    </View>
                    <View style={[card_sec.textBox, { borderRadius: Math.min(largura, altura) * 0.036 }]}>
                        <TextInput
                            style={[card_styles.descricao]}
                            placeholder="Descreva o que aconteceu"
                            placeholderTextColor="rgba(250, 250, 250, 1)"
                            multiline={true} 
                            maxLength={140}  
                            value={item.descricao}
                            editable={false}
                        />


                    </View>
                    <View style={card_sec.media}>
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
            </View>
        </Pressable>

    );
};

const CardSecundario = () => {
  const { cardsSalvos } = useCard(); 

  return (
    <FlatList style={{ flex: 1}}
      data={cardsSalvos}
      renderItem={({ item }) => <View style={{ marginBottom: 15 }}><CardItem item={item} /></View>}
      keyExtractor={(item) => item.id}

    />
  );
};



function getStyle(largura, altura) {
    return StyleSheet.create({
        container: {

            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            width: largura * 0.88,
            height: altura * 0.36,
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
        height: 49,
        gap: '2.19%',
        alignSelf: 'center',
        flexDirection: 'row',

        //backgroundColor: 'rgba(0, 0, 0, 0.15)'//teste visual

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
        height: '20%',
        width: '100%',
        //  backgroundColor: 'green',
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
        flexDirection: 'row',
        gap: 10,
        //backgroundColor: 'blue',


    },
});

export default CardSecundario;

