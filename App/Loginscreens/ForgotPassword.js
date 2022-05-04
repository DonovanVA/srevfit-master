import { useState } from 'react';
import { View, Text,Image, useWindowDimensions,StyleSheet,SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import Custominput from '../custominput/Custominput'
import Custombutton from '../custombutton/Custombutton';
import SocialSigninButtons from '../socialsigninbuttons/SocialSigninButtons';
import navigation from '../navigation/navigation';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPassword({accdetails}) {
    const [username,setUsername] = useState('');
    
    const navigation= useNavigation();
    
    const onSignInPressed=()=>{
        console.warn('Sign in');
        navigation.navigate('SignIn')
    }
    const onSendPressed=()=>{
        navigation.navigate('NewPassword')
        console.warn('send')
    }
    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style = {styles.root}>
            <Text style={styles.title}>Reset your password</Text>
            <Custominput 
            placeholder = "Username" 
            value={username} 
            setValue={setUsername}
            secureTextEntry={false}
            ></Custominput>
            <Custombutton text ="Confirm" onPress={onSendPressed}></Custombutton>
            <Custombutton text ="Back to Sign in" onPress={onSignInPressed}></Custombutton>
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
