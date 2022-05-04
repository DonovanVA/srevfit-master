import { useState } from 'react';
import { View, Text,Image, useWindowDimensions,StyleSheet,SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import Custominput from '../custominput/Custominput'
import Custombutton from '../custombutton/Custombutton';
import SocialSigninButtons from '../socialsigninbuttons/SocialSigninButtons';
import { useNavigation } from '@react-navigation/native';

export default function NewPassword({accdetails}) {
    
    const[code,setCode]= useState('')
    const[newPassword, setNewPassword] = useState('')
    const navigation=useNavigation();
    
    const onSignInPressed=()=>{
        console.warn('Sign in');
        navigation.navigate('SignIn')
    }
    const onSubmitPressed=()=>{
        navigation.navigate('Dashboard')
        console.warn('send')
    }
    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style = {styles.root}>
            <Text style={styles.title}>Reset your password</Text>
            <Custominput 
            placeholder = "Code" 
            value={code} 
            setValue={setCode}
            secureTextEntry={false}
            ></Custominput>
            <Custominput 
            placeholder = "Enter your new password" 
            value={newPassword} 
            setValue={setNewPassword}
            secureTextEntry={false}
            ></Custominput>

            <Custombutton text ="Submit" onPress={onSubmitPressed}></Custombutton>
            <Custombutton text ="Back to Sign in" onPress={onSignInPressed} type="TERTIARY"></Custombutton>
        </SafeAreaView>
        </ScrollView>
  );
}


const styles = StyleSheet.create({

    root:{
        alignItems:'center',
        padding:20,
    },
    logo:{
        width:'70%',
        maxWidth:300,
        maxHeight:200,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'#051C60',
        margin:10,

    },
    text:{
        color: 'gray',
        marginVertical:10,

    },
    link:{
        color:'#FDB075',
    
    }



})
