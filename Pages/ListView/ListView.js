import React, { Component } from 'react';
import {TextInput,Button,Text, View,Alert, SafeAreaView,StyleSheet,FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const MessageList = [
    {
      
      title: 'Tudor                            0.5 Mile(s)' ,
      text: ' Cant wait to try the new moqups. '
    },
    {
      title: 'Amy                              1.0 Mile(s)' ,
      text: ' How about this new iOS UI kit? Give me. '
    },
    {
      title: 'John                             1.5 Mile(s)' ,
      text: ' Hey Bruce, whats going on? Did you '
    },
    {
      title: 'Bruce                            2.0 Mile(s)',
      text: 'How is it that you always look so cool and charming?'
    },
    {
      title: 'Dihorul                          2.5 Mile(s)',
      text: 'Its nothing really, I can survive in the wild as much as its needed...'
    },
    {
      title: 'Bursucul                         1.5 mile(s)',
      text: 'How is it that you always look so cool and charming?'
    },  
    {
        title: 'Random Guy                     1.0 mile(s)',
        text: 'How is it that you always look so cool and charming?'
    },
    {
        title: 'Stefan                         1 mile(s)',
        text: 'How is it that you always look so cool and charming?'
    },
    {
        title: 'Ada Lovelace                   2.5 Mile(s)' ,
        text: ' Hey Bruce, whats going on? Did you '
    },
    {
        title: 'Mark Hopper                    1.0 Mile(s)' ,
        text: ' Hey Bruce, whats going on? Did you '
    },
    {
        title: 'Johnny                         3.5 Mile(s)' ,
        text: ' Hey Bruce, whats going on? Did you '
    },
    {
        title: 'Christina                      1.5 Mile(s)' ,
        text: ' Hey Bruce, whats going on? Did you '
    },  
  ];
  
  
  const Item = ({ title,text}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title}  text ={item.text}  />
  );



export default class ListView extends Component{
    render(){
        return(
         <View style={{borderBottomWidth:'thin'}}>
            <ScrollView>
                <Text style={{fontSize:30,fontweight:'bold',marginTop:40,textAlign:'center',backgroundColor:'deepskyblue'}}>Find a Class</Text>
                <TextInput style={styles.search}placeholder="Tennis for a six year old kid" />
                <SafeAreaView style={styles.container}>
                <Text style={{padding:8,marginTop:10,marginBottom:10,backgroundColor:'whitesmoke'}}> Map View  | 
                <Text style={{color:'blue'}}>   List View</Text>
                </Text>
                </SafeAreaView>
                <ScrollView>
                <FlatList
                    style={styles.flat}
                    data={MessageList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                </ScrollView>
            </ScrollView>
        </View>
        
        )
    }
}

