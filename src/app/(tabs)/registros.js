import { StyleSheet, Button, View, ScrollView, TextInput, } from "react-native";

import CardSecundario from "../../../components/card";
import Icon from '@expo/vector-icons/Feather';
import { useState } from "react";


export default function Registros() {

    const [search, setSearch] = useState();

    return (
        <View style={style.t_container}>
            <View style={style.header}>
                <View style={style.searchbarContainer}>
                    <TextInput style={style.searchBar} value={search} onChangeText={setSearch} placeholder="Pesquise registros"></TextInput>
                    <View style={style.iconContainer}>
                        <Icon name="search" size={20} />
                    </View>

                </View>
                <View style={style.dataFilter}>

                </View>

            </View>

            <View style={style.cardConteiner}>

                <CardSecundario />


            </View>

        </View>
    )
}


const style = StyleSheet.create({

    t_container: {

        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
        backgroundColor: 'rgba(247, 247, 247, 1)'



    },
    header: {

        flex: 1,
      //  backgroundColor: 'rgb(192, 0, 0)',
        width: '100%',
        gap: 24,
        margin: '5%',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '2%',
        paddingBottom: '2%'
    },
    cardConteiner: {
        flex: 4,
        // backgroundColor: 'rgb(18, 88, 0)',
        width: '90%',



    },
    dataFilter: {
        flex: 1,
        // backgroundColor: 'rgb(0, 16, 70)',



    },
    searchbarContainer: {
        flex: 1,
        backgroundColor: 'rgba(247, 247, 247, 1)',
        borderRadius: 30,
        flexDirection: 'row',
        alignContent: 'flex-end',
        borderColor: '#ccc',
        borderWidth: 1,
    },
    searchBar: {
        flex: 1,
        //backgroundColor: 'rgb(0, 0, 0)',
        borderRadius: 30,
        fontFamily: 'Poppins-Regular',
        paddingLeft: 20,


    },
    iconContainer: {
        // backgroundColor: 'rgb(0, 0, 0)',
        width: '10%',
        justifyContent: 'center'
    }

});
