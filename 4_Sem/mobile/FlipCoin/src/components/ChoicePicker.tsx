import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/FlipCoinStyles';

type CoinSide = 'cara' | 'coroa';

type ChoicePickerProps = {
  selectedChoice: CoinSide;
  onChangeChoice: (value: CoinSide) => void;
};

export default function ChoicePicker({
  selectedChoice,
  onChangeChoice,
}: ChoicePickerProps) {
  return (
    <View style={styles.pickerContainer}>
      <Text style={styles.label}>Escolha uma opção:</Text>

      <Picker
        selectedValue={selectedChoice}
        onValueChange={(itemValue) => onChangeChoice(itemValue as CoinSide)}
        style={styles.picker}
      >
        <Picker.Item label="Cara" value="cara" />
        <Picker.Item label="Coroa" value="coroa" />
      </Picker>
    </View>
  );
}