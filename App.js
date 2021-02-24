import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BemVindo from './src/components/BemVindo';
import ImagemSaudacao from './src/components/ImagemSaudacao';
import BtnEntrar from './src/components/BtnEntrar';

export default class App extends Component {
  render(){
    let nome = 'Rogerio';
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BemVindo
        titSaudacao='Ola, seja bem-vindo(a)'
      />
      <Text style={styles.paragrafo}>Teste informação. Meu nome é <Text style={styles.textoDestacado}>
        {nome}</Text>      
      </Text>
      <ImagemSaudacao
        largura={800}
        altura={500}
        nomeImagem='Clique aqui para acessar'
      />
      <BtnEntrar tituloBotao='Entrar'/>
    </View>
    ) 
  }
}

const styles = StyleSheet.create({
  container: {    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  paragrafo:{
    fontSize: 20,
    margin: 20    
  },
  textoDestacado:{
    fontWeight: 'bold'
  }
});
