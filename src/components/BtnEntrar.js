import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableHighlight} from 'react-native';

export default class BtnEntrar extends Component{

    render(){
        return(
            <View style={styles.container}>
                <TouchableHighlight
                    style={styles.BtnEntrar}>
                    <Button  title={this.props.tituloBotao}/>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'        
    },
    BtnEntrar:{
        height: 40,
        width: 500,        
        backgroundColor: 'yelow'
    }
})