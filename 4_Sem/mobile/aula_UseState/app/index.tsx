import React, { useState } from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function App() {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Você clicou {valor1} vezes</Text>
      <Button title="Clique aqui" onPress={() => setValor1(valor1 + 1)} />
      <Text>Clique aqui para tirar seus cliques</Text>
      <Button title="Retirar Cliques" onPress={() => setValor1(valor1 - 1)} />

      <Text>Ir para concatenar</Text>
      <Button 
        title="Concatenar" 
        onPress={() => router.push('/concatenar')} 
    />



    </View>
  );
}