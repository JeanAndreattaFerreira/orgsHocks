import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import useProdutores from '../../../hooks/useProdutores';

import Produtor from './Produtor';

export default function Produtores({topo: Topo}){
    const [titulo, lista] = useProdutores();

    const  retornaTitulo = () => {
        return <>            
            <Topo />
            <Text style={estilos.titulo}> { titulo }</Text>
        </>        
    }
    
    return <FlatList 
        data={lista}
        renderItem={({item}) => <Produtor { ...item } />}
        keyExtractor={({nome}) => nome}
        ListHeaderComponent={retornaTitulo()}
    />    
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        fontWeight: 'bold',
        color: '#464646',
        marginTop: 20,        
    },
})