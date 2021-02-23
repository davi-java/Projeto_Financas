import React from 'react';
import { Picker } from '@react-native-community/picker';
import {
    PickerView
} from './styles';
import { color } from 'react-native-reanimated';

export default function Pickers({ onChange, tipo }) {
    return (
        <PickerView >
            <Picker
                style={{
                    width: '100%'
                }}
                selectedValue={tipo}
                onValueChange={(value) => onChange(value)}
            >
                <Picker.Item label="Receita" value="receita" />
                <Picker.Item label="Despesa" value="despesa" />
            </Picker>
        </PickerView>
    );
}