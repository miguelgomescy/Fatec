import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';

import ChoicePicker from '../components/ChoicePicker';
import CoinDisplay from '../components/CoinDisplay';
import StatsCard from '../components/StatsCard';
import styles from '../styles/FlipCoinStyles';

type CoinSide = 'cara' | 'coroa';

export default function FlipperScreen() {
  const [selectedChoice, setSelectedChoice] = useState<CoinSide>('cara');
  const [result, setResult] = useState<CoinSide | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const [totalRounds, setTotalRounds] = useState<number>(0);
  const [userWins, setUserWins] = useState<number>(0);
  const [appWins, setAppWins] = useState<number>(0);

  const handleFlipCoin = () => {
    if (isFlipping) return;

    setIsFlipping(true);

    const drawnResult: CoinSide = Math.random() < 0.5 ? 'cara' : 'coroa';

    setTimeout(() => {
      setResult(drawnResult);
      setTotalRounds((prev) => prev + 1);

      if (drawnResult === selectedChoice) {
        setUserWins((prev) => prev + 1);
        Alert.alert('Resultado', `Deu ${drawnResult.toUpperCase()}!\nVocê venceu.`);
      } else {
        setAppWins((prev) => prev + 1);
        Alert.alert('Resultado', `Deu ${drawnResult.toUpperCase()}!\nA máquina venceu.`);
      }

      setIsFlipping(false);
    }, 1200);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cara ou Coroa</Text>
      <Text style={styles.subtitle}>Escolha uma opção no Picker e faça o sorteio</Text>

      <ChoicePicker selectedChoice={selectedChoice} onChangeChoice={setSelectedChoice} />

      <CoinDisplay result={result} isFlipping={isFlipping} />

      <View style={styles.buttonContainer}>
        <Button title={isFlipping ? 'Girando...' : 'Sortear'} onPress={handleFlipCoin} />
      </View>

      <StatsCard totalRounds={totalRounds} userWins={userWins} appWins={appWins} />
    </View>
  );
}