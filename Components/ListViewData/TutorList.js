import MessagesList from '../../Data/listviewlist';
import {StatusBar,TextInput, SafeAreaView, FlatList,StyleSheet,Image, Text, View } from 'react-native';
import React from 'react';
import styles from '../../Pages/ListView/ListviewStyle';


const Message = ({ title,text}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );

  const renderMessage = ({ item }) => (
    <Message title={item.title}  text ={item.text}  />
  );


  function TutorList(){
    return (
      <FlatList
        data={MessagesList}
        renderItem={renderMessage}
        keyExtractor={item => item.title}
      />
    );
    }

export default TutorList;