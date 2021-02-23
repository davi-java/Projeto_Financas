import React, { useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import {
  Background,
  Container,
  Nome,
  Saldo,
  Title,
  List
} from '../Home/styles';
import HistoricoList from '../../components/HistoricoList';

export default function Home() {

  const { user, signOut } = useContext(AuthContext);
  const [historico,setHistorico] = useState([
    {key:'1',tipo:'receita',valor:1200},
    {key:'2',tipo:'despesa',valor:200},
    {key:'3',tipo:'receita',valor:100},
    {key:'4',tipo:'receita',valor:120},
    {key:'5',tipo:'despesa',valor:500},
    {key:'6',tipo:'receita',valor:100},
  ])
  return (
    <Background>
      <Header/>
      <Container>
        <Nome> {user && user.nome} </Nome>
        <Saldo>R$ 123,00</Saldo>
      </Container>

      <Title>Ultimas movimentações</Title>

      <List
        showsVerticalScrollIndicator={false}
        data={historico}
        keyExtractor={item => item.key}
        renderItem={({item}) => <HistoricoList data={item} /> }
      />
    </Background>
  );
}