import  React from 'react';
import { FlatList, Text,StyleSheet, View } from 'react-native';
import ProfileList from '../../Data/ProfileList';
import styles from '../../Pages/HomePage/style';

const Profiles = ({ title,price,specialization}) => (
  <View style={styles.item} >
    <Text style={styles.title} >{title}</Text>
    <Text style={styles.price}>{price}</Text>
    <Text  style={styles.specialization}>{specialization}</Text>
         
  </View>
);

const renderProfiles = ({item}) => (
  <Profiles title={item.title}  price ={item.price} specialization={item.specialization} /> 
);


const ProfileListView =()=>{
  return(
    <FlatList data={ProfileList} renderItem={renderProfiles} keyExtractor={item => item.title} />
  );
  }

export default ProfileListView;

