import React, { useState, useContext } from 'react';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import Header from '../../components/Header';
import {
  Background,
  Input,
  SubmiButton,
  SubmiText
} from '../New/styles';
import Pickers from '../../components/Picker';
import firebase from '../../Services/FirebaseConnection';
import { AuthContext } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';

export default function New() {

  const { user: usuario } = useContext(AuthContext);
  const navigation = useNavigation();

  const [value, setValue] = useState('');
  const [tipo, setTipo] = useState('receita');

  function handleSubmit(params) {
    Keyboard.dismiss()
    if (isNaN(parseFloat(value)) || tipo === null) {
      return;
    }

    Alert.alert(
      'Confirmando dados',
      `Tipo: ${tipo} - Valor: ${parseFloat(value).toFixed(2)}`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Continuar', onPress: () => handleAdd() }
      ]
    )
  }

  async function handleAdd(params) {
    let uid = usuario.uid;
    let key = await firebase.database().ref('historico').child(uid).push().key;
    await firebase.database().ref('historico').child(uid).child(key).set({
      tipo: tipo,
      value: value,
      date: format(new Date(), 'dd/MM/yy')
    });

    let user = await firebase.database().ref('users').child(uid);
    await user.once('value').then((snapshot) => {
      let saldo = parseFloat(snapshot.val().saldo);
      tipo === 'despesa' ? saldo -= parseFloat(value) : saldo += parseFloat(value);
      user.child('saldo').set(saldo);
    })
    Keyboard.dismiss();
    navigation.navigate('Home');
    setValue('');
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Header />
        <SafeAreaView style={{ alignItems: 'center' }}>
          <Input
            placeholder="Valor desejado"
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => Keyboard.dismiss()}
            value={value}
            onChangeText={(text) => setValue(text)}
          />

          <Pickers
            onChange={setTipo}
            tipo={tipo}
          />

          <SubmiButton onPress={() => handleSubmit()}>
            <SubmiText>Registrar</SubmiText>
          </SubmiButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
}