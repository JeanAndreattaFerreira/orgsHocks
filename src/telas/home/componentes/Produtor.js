import react, { useReducer, useMemo } from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Estrelas from "./Estrelas";

const distanciaEmMetros = (distancia) => {
    console.log('Distancia em Metros');
    return `${distancia}m`;
}

export default function Produtor ({ nome, imagem, distancia, estrelas}) {    
    const [selecionado, inverterSelecionado] = useReducer(
        (selecionado) => !selecionado,
        false
    );

    const distanciaTexto = useMemo(
        () => distanciaEmMetros(distancia),
        [distancia]
    ) ;

    return <TouchableOpacity
                style={estilos.card}
                onPress={inverterSelecionado}     
            >
        <Image style={estilos.imagem} source={imagem} accessibilityLabel={nome} />
        <View style={estilos.info}>
            <View>
                <Text style={estilos.nome}>{ nome } </Text>
                <Estrelas 
                    quantidade={estrelas}
                    editavel={selecionado}
                    grande={selecionado}
                 />
            </View>            
            <Text  style={estilos.distancia}>{ distanciaTexto } </Text>
        </View>        
    </TouchableOpacity>  
}

const estilos = StyleSheet.create({
    card: {
        backgroundColor: '#F6F6F6',    
        flexDirection: 'row',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,

        //Android
        elevation: 4,

        //IOs
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },

    imagem: {
        height: 48,
        width: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },

    info: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },

    nome: {
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 22,
    },

    distancia: {
        fontSize: 12,
        lineHeight: 19,
    }
})   

