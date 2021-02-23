import React, { useState } from 'react';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Header from '../../components/Header';
import {
  Background,
  Input,
  SubmiButton,
  SubmiText
} from '../New/styles';
import Pickers from '../../components/Picker';

export default function New() {

  const [value, setValue] = useState('');
  const [tipo, setTipo] = useState('receita');

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

          <SubmiButton>
            <SubmiText>Registrar</SubmiText>
          </SubmiButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
}