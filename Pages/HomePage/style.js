import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({

item:{
    backgroundColor:'white',
    marginLeft:10,
    flex:1,
    alignItems:'stretch',
    justifyContent:'center',
    padding:8,
    borderstyle:'solid',
    borderleftwidth:'thin',
    borderrightwidth:'thin',
    borderrightcolor:'lightgray',
    borderleftcolor:'lightgray', 
},
 title:{
    fontSize: 14,
    flex:1,
    fontWeight:'bold'
  },
  price:{
    fontSize:13,
    flex:1
  },
  
  text1:{
    fontSize:30,
    fontWeight:'bold',
    marginTop:40,
    textAlign:'center',
    backgroundColor:'deepskyblue'
  },
  search:{
    fontStyle:'italic',
    borderStyle:'solid',
    borderWidth:1,
    padding:5,
    backgroundColor:'customGray',
    marginTop:30,
    marginLeft:10,
    marginRight:10
  },
  activities:{
    padding:5,
    marginBottom:5,
    marginTop:20,
    fontSize:20,
    marginLeft:10,
    fontWeight:'bold',
    fontFamily:'sans-serif',
    marginRight:7,
    textAlign:'right'
  },
  favourites:{
    marginLeft:10,
    marginBottom:5,
    fontWeight:'bold',
    fontSize:20,
    padding:5,
    marginRight:7,
    borderbottomcolor:'lightgray',
    marginTop:10,
    fontFamily:'sans-serif',
    textAlign:'right',
    borderBottomWidth:'thin'
  },
  messages:{
    marginLeft:10,
    marginBottom:5,
    fontWeight:'bold',
    fontSize:20,
    padding:5,
    marginRight:7,
    borderbottomcolor:'lightgray',
    marginTop:10,
    fontFamily:'sans-serif',
    textAlign:'right',
    borderBottomWidth:'thin'
  }


});

export default  styles;