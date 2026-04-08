import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/MainStyles';
import Footer from '../components/Footer';

export default function Calculadora() {
  const [display, setDisplay] = useState('0');
  const [valorAnterior, setValorAnterior] = useState<number | null>(null);
  const [operacao, setOperacao] = useState<string | null>(null);
  const [novoNumero, setNovoNumero] = useState(false);

  function adicionarNumero(numero: string) {
    if (display === '0' || novoNumero) {
      setDisplay(numero);
      setNovoNumero(false);
    } else {
      setDisplay(display + numero);
    }
  }

  function limpar() {
    setDisplay('0');
    setValorAnterior(null);
    setOperacao(null);
    setNovoNumero(false);
  }

  function escolherOperacao(op: string) {
    const numeroAtual = Number(display);

    if (valorAnterior === null) {
      setValorAnterior(numeroAtual);
    } else if (operacao) {
      const resultado = calcular(valorAnterior, numeroAtual, operacao);
      setDisplay(String(resultado));
      setValorAnterior(resultado);
    }

    setOperacao(op);
    setNovoNumero(true);
  }

  function calcular(a: number, b: number, op: string): number {
    switch (op) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '×':
        return a * b;
      case '÷':
        return b !== 0 ? a / b : 0;
      default:
        return b;
    }
  }

  function resultadoFinal() {
    if (valorAnterior === null || operacao === null) return;

    const numeroAtual = Number(display);
    const resultado = calcular(valorAnterior, numeroAtual, operacao);

    setDisplay(String(resultado));
    setValorAnterior(null);
    setOperacao(null);
    setNovoNumero(true);
  }

  function renderBotao(valor: string, onPress: () => void, destaque = false) {
    return (
      <TouchableOpacity
        style={[styles.botao, destaque && styles.botaoOperacao]}
        onPress={onPress}
      >
        <Text style={styles.textoBotao}>{valor}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.display}>{display}</Text>
      </View>

      <View style={styles.linha}>
        {renderBotao('C', limpar, true)}
        {renderBotao('÷', () => escolherOperacao('÷'), true)}
      </View>

      <View style={styles.linha}>
        {renderBotao('7', () => adicionarNumero('7'))}
        {renderBotao('8', () => adicionarNumero('8'))}
        {renderBotao('9', () => adicionarNumero('9'))}
        {renderBotao('×', () => escolherOperacao('×'), true)}
      </View>

      <View style={styles.linha}>
        {renderBotao('4', () => adicionarNumero('4'))}
        {renderBotao('5', () => adicionarNumero('5'))}
        {renderBotao('6', () => adicionarNumero('6'))}
        {renderBotao('-', () => escolherOperacao('-'), true)}
      </View>

      <View style={styles.linha}>
        {renderBotao('1', () => adicionarNumero('1'))}
        {renderBotao('2', () => adicionarNumero('2'))}
        {renderBotao('3', () => adicionarNumero('3'))}
        {renderBotao('+', () => escolherOperacao('+'), true)}
      </View>

      <View style={styles.linha}>
        {renderBotao('0', () => adicionarNumero('0'))}
        {renderBotao('=', resultadoFinal, true)}
      </View>

      <Footer />
      </View>
  );
}