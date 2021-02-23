import {StyleSheet} from 'react-native';

const mapviewstyles = StyleSheet.create({

container:{
    justifyContent: 'center',
    padding:8,
    marginTop:10,
    marginBottom:10,
    backgroundColor:'whitesmoke'
  },
  base:{
      color:'blue',
      padding:5,
      marginLeft:7
  },
  inner:{
      color:'black'
  },
  search:{
    fontStyle:'italic',
    borderStyle:'solid',
    borderWidth:1,
    padding:5,
    marginTop:30,
    marginLeft:10,
    marginRight:10
  },
  header:
  {fontSize:30,
    fontweight:'bold',
    marginTop:40,
    textAlign:'center',
    backgroundColor:'deepskyblue'
  }
});
 
 export default mapviewstyles;