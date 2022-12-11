import { useState, useEffect } from "react";

import { carregaProdutores } from '../servicos/carregaDados';

export default function useProdutores() {

    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = carregaProdutores();

        retorno.lista.sort(
            (a,b) => a.distancia - b.distancia,
        );

        setTitulo(retorno.titulo);                                  
        setLista(retorno.lista);         
    }, []);

    return [titulo, lista];
}