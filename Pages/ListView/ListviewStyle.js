import {StyleSheet} from 'react-native';
const listviewstyles = StyleSheet.create({


container: {
    flex: 1,
    justifyContent: 'center',
    
  },

item: {
    
    backgroundColor: "white",
  
    marginLeft:10,
    flex:1,
    alignItems:'stretch',
    justifyContent:'center',
    padding:15,
  },
  title: {
    fontSize: 14,
    flex:1
  },
  price:{
    fontSize:13,
    flex:1
  },
  text:{
    fontStyle:13,
    flex:3
  },
header:{
    fontSize:30,
    fontweight:'bold',
    marginTop:40,
    textAlign:'center',
    backgroundColor:'deepskyblue'
  },
  mapview:
  {
    padding:8,
    marginTop:10,
    marginBottom:10,
    backgroundColor:'whitesmoke'
  },
  listview:{
    color:'blue'
  },
search:{
    fontStyle:'italic',
    borderLeft:'solid',
    borderWidth:1,
    textAlign:'auto',
    padding:5,
    marginTop:30,
    marginLeft:10,
    marginRight:10
}

});

export default  listviewstyles;