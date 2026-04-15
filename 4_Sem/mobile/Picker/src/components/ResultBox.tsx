import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/MainStyles";

type Props = {
  resultado: string;
};

export default function ResultBox({ resultado }: Props) {
  return (
    <View style={styles.resultBox}>
      <Text style={styles.resultLabel}>Resultado</Text>
      <Text style={styles.resultText}>{resultado}</Text>
    </View>
  );
}