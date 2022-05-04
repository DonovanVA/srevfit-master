import { useState } from 'react';
import { View, Text,Image, useWindowDimensions,StyleSheet,SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import Custominput from '../custominput/Custominput'
import Custombutton from '../custombutton/Custombutton';
import SocialSigninButtons from '../socialsigninbuttons/SocialSigninButtons';
import { useNavigation } from '@react-navigation/native';
import Signup from './Signup';
export default function Signin({accdetails}) {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('')
    const {height}= useWindowDimensions();
    const navigation=useNavigation();



    const onSignInPressed=()=>{
        console.warn('Sign in');
        // validate user
        navigation.navigate('Dashboard')
    }
    const onForgotPasswordPressed=()=>{
        
        navigation.navigate('ForgotPassword')
    }
    
    const onSignupPress=()=>{
        console.warn('OnSignup')
        navigation.navigate('SignUp')
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style = {styles.root}>
            <Text>Signin</Text>
            <Custominput 
            placeholder = "Username" 
            value={username} 
            setValue={setUsername}
            secureTextEntry={false}

            ></Custominput>
            <Custominput 
            placeholder = "Password" 
            value={password} 
            setValue={setPassword}
            secureTextEntry={true}
    
            ></Custominput>
            <Custombutton
            text ="Sign in"
            onPress={onSignInPressed}
            type="PRIMARY"
            ></Custombutton>
            <Custombutton
            text ="Forgot Password?"
            onPress={onForgotPasswordPressed}
            type ="TERTIARY"
            ></Custombutton>
            
            <SocialSigninButtons></SocialSigninButtons>
            <Custombutton 
            text ="Don't have an account? Create one" 
            onPress={onSignupPress}
            type="TERTIARY"
            
            ></Custombutton>
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
    }





})