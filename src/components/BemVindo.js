import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class BemVindo extends Component{
    render(){
        return(

            <View>
                <Text style={styles.tit}>{this.props.titSaudacao}</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    tit:{
    color:'#51A7FF',
    fontSize:25,
    fontWeight:500,
    marginBottom:20
    }
})
