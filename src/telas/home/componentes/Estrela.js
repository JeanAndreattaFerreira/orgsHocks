import react from "react";
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

import estrela from '../../../assets/estrela.png';
import estrelaCinza from '../../../assets/estrelaCinza.png';

export default function Estrela ({
    onPress,
    desabitada = false,
    grande = true,
    verde = true
}){
    const getImagem = (acesa) =>{
        if (acesa) {
            return estrela
        }
        return estrelaCinza;
    };

    const estilos = estilosFuncao(grande);

    return <TouchableOpacity                             
        onPress={onPress}
        disabled={desabitada}
    >
        <Image style={estilos.estrela} source={getImagem(verde)} />
    </TouchableOpacity>
};

const estilosFuncao = (grande) => StyleSheet.create({
    estrela: {
        height: grande ? 36 : 12,
        width: grande ? 36 : 12,
        marginRight: 2,
    },
});