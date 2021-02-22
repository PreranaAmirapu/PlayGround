import MessageList from '../../Data/MessageList';
import {StatusBar,TextInput, SafeAreaView, FlatList,StyleSheet,Image, Text, View } from 'react-native';
import React from 'react';
import styles from '../../Pages/HomePage/style';


const Messages = ({ title,text}) => (
    <View style={styles.item} >
      <Text  style={styles.title}>{title}</Text>
      <Text >{text}</Text>
           
    </View>
  );

  const renderMessages = ({item}) => (
    <Messages title={item.title}  text ={item.text}  />
  );


  function MessageListView(){
    return (
      <FlatList
        data={MessageList}
        renderItem={renderMessages}
        keyExtractor={item => item.title}
      />
    );
    }

export default MessageListView;

