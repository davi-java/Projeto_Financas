import React, { useState, useContext } from 'react';
import { View, Text, Platform } from 'react-native';
import {AuthContext} from '../../contexts/auth';
import {
    Background,
    Container,
    AreaInput,
    Input,
    SubmiButton,
    SubmiText
} from '../SignIn/styles'

export default function SignUp() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signUp } = useContext(AuthContext);

    function handleSignUp(){
        signUp(email,password,nome);
    }

    return (
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >

                <AreaInput>
                    <Input
                        placeholder="nome"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                    />
                </AreaInput>
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

                <SubmiButton onPress={() => handleSignUp()}>
                    <SubmiText>Acessar</SubmiText>
                </SubmiButton>

            </Container>
        </Background>
    );
}