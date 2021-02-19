import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BemVindo from './src/components/BemVindo';
import ImagemSaudacao from './src/components/ImagemSaudacao';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BemVindo
        titSaudacao='Ola, seja bem-vindo(a)'
      />
      <Text>Teste</Text>
      <ImagemSaudacao
        largura={800}
        altura={500}
        nomeImagem='Clique aqui para acessar'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
});
