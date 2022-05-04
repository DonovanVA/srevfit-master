import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'


export default function Custominput({value,setValue,secureTextEntry,placeholder}) {
  return (
    <View style ={styles.container}>
      <TextInput 
        placeholder={placeholder} 
        onChangeText={(value)=>setValue(value)}
        value = {value}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
    />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:"100%",

        borderColor:"#E8E8E8",
        borderWidth:1,
        borderRadius:5,

        paddingHorizontal:10,
        marginVertical:5,

    },
    input:{
        height:30

    },
    
  })