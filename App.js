import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { SafeAreaView, FlatList,StyleSheet, Text, View } from 'react-native';
import Homepage from './Pages/HomePage/Homepage';
import Contents from './Contents';


export default function App() {

  return (
   <View>
   <Homepage/>
   </View>
  );
}


