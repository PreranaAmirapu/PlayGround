import React, { Component } from 'react';
import {StatusBar, SafeAreaView, FlatList,StyleSheet,Image, Text, View, Button, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class Description extends Component{
    
     
    render(){    
    return ( 
        
        <View >
          <ScrollView>
            <Text style={{marginTop:50,padding:8,borderColor:'lightgray',marginRight:15,marginLeft:15,borderBottomWidth:'thin'}}> Group of 5 Tennis Class for 5-7 Year old</Text>
            <Text style={{marginTop:15,marginLeft:15,}}>Monday Oct 5, 2020 5:30 PM - 6:30 PM 5 weeks</Text>
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
              <Text style={{marginTop:20,marginLeft:15,marginRight:15,padding:8}}>3 Places available</Text>
              <Text style={{marginTop:20,marginLeft:15,marginRight:15,padding:8}}>Northwood HA8 4xx</Text>
              <Text style={{marginTop:20,marginLeft:15,marginRight:15,borderBottomWidth:'thin',padding:8}}>Video Conferencing available</Text>
              <Text style={{textAlign:'right',marginRight:40,marginTop:40}}>Price Per Class:        £25.00</Text>
              <Text style={{textAlign:'right',marginRight:63}}>Number of Classes:    5</Text>
              <Text style={{textAlign:'right',marginRight:40}}>Booking Charge:       £5:00</Text>
              <Text style={{textAlign:'right',marginRight:40}}>Booking Charge:       £5:00</Text>
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

const styles = StyleSheet.create({
  base:{
   fontWeight:'bold',
   flex:1,
   marginLeft:15,
   marginRight:15,
   marginTop:15
  },
  inner:{
    fontWeight:'normal',
    flex:1
  },
  button:{
    padding: 20,
    justifyContent:'flex-end',
    flexDirection:'row',
    marginRight:10,
    padding:40

}
  })