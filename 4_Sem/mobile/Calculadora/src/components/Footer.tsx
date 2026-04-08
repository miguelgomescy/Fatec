import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import { styles } from '../styles/MainStyles';

export default function Footer() {
  const abrirGithub = () => {
    Linking.openURL('https://github.com/miguelgomescy');
  };

  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Desenvolvido por</Text>

      <TouchableOpacity onPress={abrirGithub}>
        <Text style={styles.footerLink}>Miguel Gomes</Text>
      </TouchableOpacity>
    </View>
  );
}