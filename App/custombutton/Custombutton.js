import { View, Text,StyleSheet,Pressable,ScrollView } from 'react-native'
import React from 'react'

export default function Custombutton({onPress,text,type='PRIMARY', bgColor,fgColor}) {
  return (
    <Pressable 
    style ={[
      styles.container,
      styles[`container_${type}`],
      bgColor?{backgroundColor:bgColor}:{},
    
    
    
    ]} onPress={onPress}>
      <Text 
      style = {[
        styles.text,
        styles[`text_${type}`],
        fgColor?{color:fgColor}:{},
        
        
        ]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  

  container_PRIMARY:{
    backgroundColor:"#3B71F3",
    width:"100%",
    padding:15,
    marginVertical:5,
    alignItems:'center',
    borderRadius:5,

  },
  container_SECONDARY:{
    borderColor:"#3B71F3",
    borderWidth:2
  },
  container_TERTIARY:{
    marginVertical:5,
    padding:15
  },

  text:{
    fontWeight:'bold',
    color:'white',


  },
  text_SECONDARY:{
    color:"#3B71F3"
  },
  text_TERTIARY:{
    color:'grey'
  }

})