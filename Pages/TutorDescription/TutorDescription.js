import React, { Component } from 'react';
import {StatusBar, SafeAreaView, FlatList,StyleSheet,Image, Text, View, Button, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './TutorDescriptionstyle';


export default class Description extends Component{
    
     
    render(){    
    return ( 
        
        <View >
          <ScrollView>
            <Text style={styles.search}> Group of 5 Tennis Class for 5-7 Year old</Text>
            <Text style={styles.timings}>Monday Oct 5, 2020 5:30 PM - 6:30 PM 5 weeks</Text>
            <Text style={styles.base}>
              Description: 
              <Text style={styles.inner}>  ipsum dolor sit amet, consectetur
              adipiscing elit. Nulla quam velit, vulputate eu pharetra
              nec, mattis ac neque. Duis vulputate commodo lectus,
              ac blandit elit tincidunt id. Sed rhoncus, tortor sed
              eleifend tristique tortor mauris molestie elit et lacinia ipsum dolor sit amet, consectetur
              adipiscing elit. Nulla quam velit, vulputate eu pharetra
              nec, mattis ac neque. Duis vulputate commodo lectus,
              ac blandit elit tincidunt id. Sed rhoncus, tortor sed
              eleifend tristique tortor mauris molestie elit et lacinia ipsum dolor sit amet, consectetur
              adipiscing elit. Nulla quam velit, vulputate eu pharetra
              nec, mattis ac neque. Duis vulputate commodo lectus,
              ac blandit elit tincidunt id. Sed rhoncus, tortor sed
              eleifend tristique tortor mauris molestie elit et lacinia ipsum dolor sit amet, consectetur
              adipiscing elit. Nulla quam velit, vulputate eu pharetra
              nec, mattis ac neque. Duis vulputate commodo lectus,
              ac blandit elit tincidunt id. Sed rhoncus, tortor sed
              eleifend tristique tortor mauris molestie elit et lacinia ipsum dolor sit amet, consectetur
              adipiscing elit. Nulla quam velit, vulputate eu pharetra
              nec, mattis ac neque. Duis vulputate commodo lectus,
              ac blandit elit tincidunt id. Sed rhoncus, tortor sed
              eleifend tristique tortor mauris molestie elit et lacinia</Text></Text>
              <Text style={styles.vacancies}>3 Places available</Text>
              <Text style={styles.address}>Northwood HA8 4xx</Text>
              <Text style={styles.videocall}>Video Conferencing available</Text>
              <Text style={styles.price}>Price Per Class:        £25.00</Text>
              <Text style={styles.classes}>Number of Classes:    5</Text>
              <Text style={styles.charge1}>Booking Charge:       £5:00</Text>
              <Text style={styles.charge2}>Booking Charge:       £5:00</Text>
              <View style={styles.button}>
                <Button
              title="Book"
              onPress={()=> Alert.alert('Booking confirmed')}
              />
              </View>
          </ScrollView>
          </View>
    )}
}

