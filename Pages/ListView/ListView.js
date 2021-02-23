import React, { Component } from 'react';
import {TextInput,Button,Text, View,Alert, SafeAreaView,StyleSheet,FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TutorList from '../../Components/ListViewData/TutorList';
import styles from './ListviewStyle';


  
  



export default class ListView extends Component{
    render(){
        return(
         <View style={{borderBottomWidth:'thin'}}>
            <ScrollView>
                <Text style={styles.header}>Find a Class</Text>
                <TextInput style={styles.search}placeholder="Tennis for a six year old kid" />
                <SafeAreaView style={styles.container}>
                <Text style={styles.mapview}> Map View  | 
                <Text style={styles.listview}>   List View</Text>
                </Text>
                </SafeAreaView>
                <ScrollView>
                <TutorList />
                </ScrollView>
            </ScrollView>
        </View>
        
        )
    }
}

