import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
    Container,
    Tipo,
    IconView,
    TipoText,
    ValorText
} from '../HistoricoList/styles';

export default function HistoricoList({data}) {
    return (
        <Container>
            <Tipo>
                <IconView tipo={data.tipo}>
                    <Icon 
                        name={data.tipo === 'receita' ? "arrow-up" : "arrow-down"}
                        color="#FFF"
                        size={20} />
                    <TipoText>{data.tipo}</TipoText>
                </IconView>
            </Tipo>
            <ValorText>
                R$ {data.valor.toFixed(2)}
            </ValorText>
        </Container>
    );
}