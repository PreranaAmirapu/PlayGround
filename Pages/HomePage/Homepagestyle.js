const styles = StyleSheet.create({



item: {
    backgroundcolor:'white',
    margininlinestart: 8,
    marginleft:10,
    flex:1,
    alignitems:'stretch',
    justifycontent:'center',
    padding:8,
    borderstyle:'solid',
    borderleftwidth:'thin',
    borderrightwidth:'thin',
    borderrightcolor:'lightgray',
    borderleftcolor:'lightgray',

  }
  .titlez{
    font-size: 14;
    flex:1;
    font-weight:'bold'
  }
  .price{
    font-size:13;
    flex:1
  }
  
  .text1{
    font-size:30;
    font-weight:'bold';
    margin-top:40;
    text-align:'center';
    background-color:'deepskyblue'
  }
  .search{
    font-style:'italic';
    border-style:'solid';
    border-width:1;
    padding:5;
    background-color:'customGray';
    margin-top:30;
    margin-left:10;
    margin-right:10
  }
  .activities{
    padding:5;
    margin-bottom:5;
    margin-top:20;
    font-size:20;
    margin-left:10;
    font-weight:'bold';
    font-family:'sans-serif';
    margin-right:7;
    text-align:'right'
  }
  .favourites{
    margin-left:10;
    margin-bottom:5;
    font-weight:'bold';
    font-size:20;
    padding:5;
    margin-right:7;
    border-bottom-color:'lightgray';
    margin-top:10;
    font-family:'sans-serif';
    text-align:'right';
    border-bottom-width:'thin'
  }
});

export default styles;