import React, { Component } from 'react';
import {StatusBar,TextInput, SafeAreaView, FlatList,StyleSheet,Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Tprofile extends Component{
    
     
    render(){    
    return ( 
        
        <View >
          <ScrollView>
          <Image style={styles.ProfilePicture}>
                
                    source={{
                         uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
                             }}
                 </Image>
          </ScrollView>
          </View>
    )}}


    const styles = StyleSheet.create({
        ProfilePicture:{
            justifycontent:'center',
            alignitems:'center',
            width: 90,
            height: 90,
            borderradius: 150 / 2,
            marginleft:715,
            margintop:50,
            padding:10  
        }})