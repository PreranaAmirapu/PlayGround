import {StyleSheet} from 'react-native';

const Tutorprofilestyles = StyleSheet.create({

tinyLogo: {
    justifyContent:'center',
    alignItems:'center',
    width: 90,
    height: 90,
    borderRadius: 150 / 2,
    marginLeft:715,
    marginTop:50,
    padding:10  
},
Message:{
   width:40,
   height:40,
   justifyItems:'flex-end',
   alignItems:'flex-end',
   flexDirection:'row-reverse',
   marginLeft:1200,
   marginTop:50
   
},
outerview:{
    flexDirection:'row'
},
innerview:{
    width: 250, 
    height: 250
},

Call:{
width:35,
height:35,
marginTop:10,
marginLeft:1200
},
Name:{
    fontWeight:'bold',
    fontSize:20,
    justifyContent:'center',
    alignItems:'center'
},
mail:{
    textAlign:'center',
    color:'grey',
    fontSize:15
},
calendar:{
    padding:10,
    textAlign:'justify',
    backgroundColor:'deepskyblue',
    color:'white',
    marginTop:20
}

});
 
export default Tutorprofilestyles;