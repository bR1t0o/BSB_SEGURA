import { StyleSheet, View, Modal, Alert } from "react-native";
import CardPrincipal from "../../../components/cardF";
import MapView, { Marker } from 'react-native-maps';
import { useState } from "react";
import { cardContext } from "../../../context/CardContext";


//import { Modal } from "react-native-paper";


export default function Principal() {

    const [ativaCard, setativaCard] = useState(false);
    const [marker, setMarker] = useState([]);

    const addRegistro = (e) => {

        // console.log(e.nativeEvent.coordinate);
        const coordenadas = e.nativeEvent.coordinate;
        setMarker([...marker, coordenadas])
        setativaCard(!ativaCard);

    };

    return (
        <View style={style.t_container} >

            <MapView style={StyleSheet.absoluteFill}
                initialRegion={{
                    latitude: -15.7942,
                    longitude: -47.8822,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,

                }}
                showsUserLocation={true}
                onLongPress={addRegistro}
            >

                {marker.map((coordenadas, i) => (
                    <Marker
                        key={i}
                        coordinate={coordenadas}
                    />

                ))}

            </MapView>

            {ativaCard && (
               
                    <CardPrincipal onCancelar={() => setativaCard(false)}/>
                  
               
            )}


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
    map: {
        width: '100%',
        height: '100%',
    }


    //usar modal?
});
