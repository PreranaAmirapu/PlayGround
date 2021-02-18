import React, { Component } from 'react';
import {StatusBar,TextInput, SafeAreaView, FlatList,StyleSheet,Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Calendar from '../Calender';
import styles from '../HomePage/Homepage.sass'

const DATA = [
    {
      title: 'Ada Lovelave',
      specialization:'(tennis)',
      price : '£20.00/Class',
     
    },
    {
      
      title: 'Mark Hopper',
      specialization: '(Maths)',     
      price: '£20.00/Class',
      
    },
    {
      
      title: 'Margaret Hamilton',
      specialization: '(English)',      
      price: '£20.00/Class'
    },
  ];
  
  const Item = ({ title,price,text,specialization}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.specialization}>{specialization}</Text> 
     
      
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} price ={item.price} text ={item.text} specialization={item.specialization} />
    
    
  );

  const MessageList = [
    {
      
      title: 'Tudor' ,
      text: ' Cant wait to try the new moqups. '
    },
    {
      title: 'Amy' ,
      text: ' How about this new iOS UI kit? Give me. '
    },
    {
      title: 'John' ,
      text: ' Hey Bruce, whats going on? Did you '
    },
  ];
  
  

  

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
        <SafeAreaView >
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Text style={styles.messages}> Messages</Text>
    <FlatList
        data={MessageList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
        </ScrollView>
        </View>
    )}
 }
 
  
  
 