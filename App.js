import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { SafeAreaView, FlatList, StyleSheet, Text, View } from 'react-native';

import MapView from './Pages/MapView/MapView';
//import Homepage from './pages/Homepage/Homepage';
//import Description from './Pages/TutorDescription/TutorDescription';

//import ListView from './Pages/ListView/ListView';
import Tutor from './pages/TutorProfile/TutorProfile';






export default function App() {

  return (
    <Tutor />
  )
}





