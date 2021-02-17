import React, { Component } from 'react';
import {StatusBar,TextInput, SafeAreaView, FlatList,StyleSheet,Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Calendar from '../../Components';
import TutorProfiles from '../../Data/TutorProfileData'; 
import MessageList from '../../Data/MessageList';


function RenderItem({ item }) {
  return (
    <Item title={item.title} price={item.price} text={item.text} specialization={item.specialization} />
  );
} 

function Item({ title, price, text, specialization }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.specialization}>{specialization}</Text>
    </View>
  );
}

function Message({title,text}){
  return(
  <View style ={styles.item}>
    <Text style = {styles.title}>{title}</Text>
    <Text style = {styles.text}>{text}</Text>
  </View>
  );
}

function RenderMessage({item}){
  return(
      <Message title={item.title} text={item.text} />
  );
}

 export default class Homepage extends Component{
     
    render(){    
       return( 
        <View>
          <ScrollView>
                 <Text
                  style={styles.search}>
                   Home
                   </Text>
                 <TextInput style={styles.input} placeholder="Search for..."  />
                 <Text style={styles.Heading1}> Activities</Text>
                 <Calendar />
                 <Text style={styles.Heading1}>Near You</Text>
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={TutorProfiles}
                        renderItem={RenderItem}
                        keyExtractor={item => item.title}
                    />
                    <Text style={styles.Heading1}> Messages</Text>
                    <FlatList
                        data={MessageList}
                        renderItem={RenderMessage}
                        keyExtractor={item => item.title}
                   />
               </SafeAreaView>
            </ScrollView>
        </View>
    );
  }
 }

  
  
 