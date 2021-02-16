import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import {
    Container,
    Nome,
    NewLink,
    NewText,
    Logout,
    LogoutText
} from '../Profile/styles';
import { AuthContext } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
    const { user, signOut } = useContext(AuthContext);
    const navigation = useNavigation();
    return (
        <Container>

            <Nome>
                {user && user.nome}
            </Nome>

            <NewLink onPress={() => navigation.navigate('New')} >
                <NewText>
                    New Gastos
                </NewText>
            </NewLink>

            <Logout onPress={() => signOut()} >
                <LogoutText>
                    Logout
                </LogoutText>
            </Logout>

        </Container>
    );
}