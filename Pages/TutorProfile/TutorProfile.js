import React, { Component } from 'react';
import {StatusBar,TextInput, SafeAreaView, FlatList,StyleSheet,Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Calendar from '../../Components/Calender';
import styles from './TutorprofileStyles';

export default class Tutor extends Component{
    render(){
        return(
            <View>
                <ScrollView>
                    <View style={styles.outerview}> 
                    <View style={styles.innerview} >
                    <Image
                    className={styles.tinyLogo}
                    source={{
                         uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
                             }}
                 />
                 <Text className={styles.Name}> Tudor </Text>
            <Text className={styles.mail}> Johanna@company.com </Text>
                    </View>
                    
                     <View style={styles.innerview}>
                     <Image

                    className={styles.Message}
                    source={{
                         uri: 'https://maxcdn.icons8.com/Share/icon/p1em/Messaging/message1600.png',
                             }}
                 />
                  <Image
                    className={styles.Call}
                    source={{
                         uri: 'https://cdn.onlinewebfonts.com/svg/img_1059.png',
                             }}
                 />
                     </View>
                    </View>
                
                 
            
            <Text className={styles.calendar}> January 2020</Text>
            <Calendar />
                </ScrollView>
            </View>
    
        )
    }
    
}