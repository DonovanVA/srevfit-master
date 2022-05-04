import { StyleSheet,View, Text,Button,SafeAreaView,TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
export default function Exercises({exercises}) {

  
  

  
  return (
    
    <SafeAreaView style = {styles.maincontent}>
      <TouchableOpacity style={styles.button} >
        <Text style = {styles.button_t}>Generate workout!</Text>
      </TouchableOpacity>
      <Text style ={styles.header}>Execises:</Text>
      
      <ScrollView>
      <FlatList data = {exercises} keyExtractor={item => item.exercise}renderItem={ITEMDATA =>(
        <Text>{ITEMDATA.item.exercise}</Text>)}/>
      </ScrollView>
      
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  maincontent: {
      height: '100%',
      width: '100%',
      flexDirection: 'column',
      backgroundColor: '#f1f1f1',
      alignItems: 'center',
      padding: 10
  },
  header:{
    textAlign:'center',
    
  },

  button: {
    textAlign:'center',
    backgroundColor: '#345BEB',
    color:"#FFF",
    padding:10,
    width:250,
    justifyContent:'center',
    borderRadius: 10,
    marginVertical: 20
  },
  button_t:{
    textAlign:'center',
    color:'#FFF'
  },
  List:{
    display:'flex',
    flexDirection:'column'
  },
  Listitems:{
    fontSize:12
  }
})