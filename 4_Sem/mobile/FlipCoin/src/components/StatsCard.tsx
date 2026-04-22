import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/FlipCoinStyles';

type StatsCardProps = {
  totalRounds: number;
  userWins: number;
  appWins: number;
};

export default function StatsCard({
  totalRounds,
  userWins,
  appWins,
}: StatsCardProps) {
  return (
    <View style={styles.statsContainer}>
      <Text style={styles.statsTitle}>Estatísticas</Text>
      <Text style={styles.statsText}>Quantidade de sorteios: {totalRounds}</Text>
      <Text style={styles.statsText}>Vitórias do usuário: {userWins}</Text>
      <Text style={styles.statsText}>Vitórias da máquina: {appWins}</Text>
    </View>
  );
}