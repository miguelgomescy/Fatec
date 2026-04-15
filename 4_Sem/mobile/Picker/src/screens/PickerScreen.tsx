import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import OperationPicker from "../components/OperationPicker";
import ResultBox from "../components/ResultBox";
import { styles } from "../styles/MainStyles";

export default function PickerScreen() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [operacao, setOperacao] = useState("soma");
  const [resultado, setResultado] = useState("0");

  function calcular() {
    const n1 = Number(numero1);
    const n2 = Number(numero2);

    if (numero1.trim() === "" || numero2.trim() === "") {
      Alert.alert("Erro", "Preencha os dois campos.");
      return;
    }

    if (isNaN(n1) || isNaN(n2)) {
      Alert.alert("Erro", "Digite apenas números válidos.");
      return;
    }

    let valorFinal = 0;

    switch (operacao) {
      case "soma":
        valorFinal = n1 + n2;
        break;
      case "subtracao":
        valorFinal = n1 - n2;
        break;
      case "multiplicacao":
        valorFinal = n1 * n2;
        break;
      case "divisao":
        if (n2 === 0) {
          Alert.alert("Erro", "Não é possível dividir por zero.");
          return;
        }
        valorFinal = n1 / n2;
        break;
      default:
        Alert.alert("Erro", "Operação inválida.");
        return;
    }

    setResultado(String(valorFinal));
  }

  function limpar() {
    setNumero1("");
    setNumero2("");
    setOperacao("soma");
    setResultado("0");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora com Picker</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        value={numero1}
        onChangeText={setNumero1}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        value={numero2}
        onChangeText={setNumero2}
      />

      <OperationPicker valor={operacao} onChange={setOperacao} />

      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.clearButton]}
        onPress={limpar}
      >
        <Text style={styles.buttonText}>Limpar</Text>
      </TouchableOpacity>

      <ResultBox resultado={resultado} />
    </View>
  );
}