import React, { Component } from 'react';
import {TextInput,Button,Text, View,Alert, SafeAreaView,StyleSheet,FlatList,Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Img extends Component{
    render(){
        return(
            <Image
        style={styles.tinyLogo}
        source={{
            uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
          }}
      />
        )
    }
}
const styles = StyleSheet.create({
    
    tinyLogo: {
      width: 50,
      height: 50,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column'
    },
   
  });