import React, { useState } from 'react';
import { View, Text, Button, Pressable, TextInput } from 'react-native';
import { Link, useRouter } from 'expo-router';



export default function App(){
    const [valor1, setValor1] = useState('');
    const [valor2, setValor2] = useState('');
    const [Resultado, setResultado] = useState('');
    const router = useRouter();

    const concatenar = () => {
        setResultado(valor1 + valor2);
    }

    return(
        <View style={{ flex: 1, justifyContent:
             'center', 
            alignItems: 'center' }}>
                <text>Concatenção de valores</text>
                
                <TextInput
                    placeholder="Digite o primeiro valor"
                    value={valor1}
                    onChangeText={setValor1}
                />

                <TextInput
                    placeholder="Digite o segundo valor"
                    value={valor2}
                    onChangeText={setValor2}
                />

                <Button title="Concatenar" onPress={concatenar} />
                <text>Resultado: {Resultado}</text>

             <Text>Primeira atividade</Text>
                  <Button 
                    title="Voltar" 
                    onPress={() => router.push('/')} 
            />
            
        </View>
    );



}
