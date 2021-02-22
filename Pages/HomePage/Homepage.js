import React, { Component } from 'react';
import {StatusBar,TextInput, SafeAreaView, FlatList,StyleSheet,Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Calendar from '../../Components/Calender';
import styles from './style';
import MessageListView from '../../Components/Messages/MessageListView';
import ProfileListView from '../../Components/Profile/ProfileListView';

  

  

 export default class Homepage extends Component{
    
     
    render(){    
    return ( 
        
        <View >
          <ScrollView>
        <Text style={styles.text1}>Home</Text>
        <TextInput style={styles.search}placeholder="Search for..."  />
        <Text style={styles.activities}> Activities</Text>
        <Calendar />
        <Text style={styles.favourites}>Favourites</Text>
        <ProfileListView />
        <SafeAreaView >
            
        <Text style={styles.messages}> Messages</Text>
        <MessageListView />
        </SafeAreaView>
        </ScrollView>
        </View>
    )}
 }
 
  
  
 