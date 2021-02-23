import React, { Component } from 'react';
import {TextInput,Button,Text, View,Alert, SafeAreaView,StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './MapViewStyles';

export default class MapView extends Component{
    render(){
        return(
         <View >
            <ScrollView>
                <Text style={styles.header}>Find a Class</Text>
                <TextInput style={styles.search}placeholder="Tennis for a six year old kid" />
                <SafeAreaView style={styles.container}>
                <Text style={styles.base}> 
                  Map View   
                <Text style={styles.inner}> |   List View </Text>
                </Text>
                </SafeAreaView>
            </ScrollView>
        </View>
        
        )
    }
}