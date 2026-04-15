import React from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "../styles/MainStyles";

type Props = {
  valor: string;
  onChange: (value: string) => void;
};

export default function OperationPicker({ valor, onChange }: Props) {
  return (
    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={valor}
        onValueChange={(itemValue) => onChange(itemValue)}
      >
        <Picker.Item label="Soma (+)" value="soma" />
        <Picker.Item label="Subtração (-)" value="subtracao" />
        <Picker.Item label="Multiplicação (×)" value="multiplicacao" />
        <Picker.Item label="Divisão (÷)" value="divisao" />
      </Picker>
    </View>
  );
}