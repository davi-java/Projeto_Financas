import React, { useState,useContext } from 'react';
import { View, Text, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmiButton,
  SubmiText,
  Link,
  LinkText
} from './styles';

import {AuthContext} from '../../contexts/auth'

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  function handlerLogin(){

  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >

        <Logo source={require('../../assets/Logo.png')} />

        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </AreaInput>

        <SubmiButton onPress={handlerLogin} >
          <SubmiText>Acessar</SubmiText>
        </SubmiButton>
        <Link onPress={() => navigation.navigate('SignUp')} >
          <LinkText>Criar um conta!</LinkText>
        </Link>

      </Container>
    </Background>
  );
}