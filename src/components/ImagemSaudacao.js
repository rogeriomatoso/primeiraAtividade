import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class ImagemSaudacao extends Component{
    render(){
        let imagem = 'https://www.infnet.edu.br/esti/wp-content/uploads/sites/5/2019/07/bigstock-Mobile-Application-Development-266379448.jpg';
        return(
            <View style={styles.container}>
                <Image
                    source={{uri: imagem}}
                    style={{width: this.props.largura, height: this.props.altura}}
                />
                <Text style={styles.ImgTit}>{this.props.nomeImagem}</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        margin: 20,
        justifyContent: 'center',
        textAlign: 'center'
    },
    ImgTit:{
        margin: 20,
        fontSize: 16
    }

})