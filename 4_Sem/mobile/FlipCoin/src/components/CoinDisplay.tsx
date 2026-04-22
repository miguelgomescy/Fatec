import React, { useEffect, useRef } from 'react';
import { View, Text, Image, Animated } from 'react-native';
import styles from '../styles/FlipCoinStyles';

type CoinSide = 'cara' | 'coroa';

type CoinDisplayProps = {
  result: CoinSide | null;
  isFlipping: boolean;
};

export default function CoinDisplay({ result, isFlipping }: CoinDisplayProps) {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isFlipping) {
      spinValue.setValue(0);

      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }).start();
    }
  }, [isFlipping, spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '1080deg'],
  });

  const getCoinImage = () => {
    if (result === 'cara') return require('../../assets/cara.png');
    if (result === 'coroa') return require('../../assets/coroa.png');
    return require('../../assets/cara.png');
  };

  return (
    <View style={styles.coinContainer}>
      <Animated.Image
        source={getCoinImage()}
        style={[
          styles.coinImage,
          {
            transform: [{ rotateY: spin }],
          },
        ]}
      />

      {result ? (
        <Text style={styles.resultText}>Resultado: {result.toUpperCase()}</Text>
      ) : (
        <Text style={styles.placeholderText}>Nenhum sorteio realizado ainda</Text>
      )}
    </View>
  );
}