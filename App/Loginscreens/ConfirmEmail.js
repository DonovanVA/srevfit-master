import { useState } from 'react';
import { View, Text,Image, useWindowDimensions,StyleSheet,SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import Custominput from '../custominput/Custominput'
import Custombutton from '../custombutton/Custombutton';
import SocialSigninButtons from '../socialsigninbuttons/SocialSigninButtons';
import { useNavigation } from '@react-navigation/native';

export default function ConfirmEmail({accdetails}) {
    
    const[code,setCode]= useState('')
    const navigation = useNavigation();

   
    const onTermsofUsePressed=()=>{
        console.warn('onTermsofUsePressed')
    }
    const onPrivacyUsePressed=()=>{
        console.warn('onPrivacyPressed')
    }
    const onSignInPressed=()=>{
        console.warn('Sign in');
        navigation.navigate('SignIn');
    }
    const onConfirmPressed=()=>{
        navigation.navigate('Dashboard');
        console.warn('confirm')
    }
    const onResendPressed=()=>{
        console.warn('onResendPress')
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style = {styles.root}>
            <Text style={styles.title}>Confirm your Email</Text>
            <Custominput 
            placeholder = "Enter your condirmation code" 
            value={code} 
            setValue={setCode}
            secureTextEntry={false}
            ></Custominput>
            <Custombutton text ="Confirm" onPress={onConfirmPressed}></Custombutton>
            <Custombutton text ="Resend code" onPress={onResendPressed} type="SECONDARY"></Custombutton>
            <Custombutton text ="Back to Sign in" onPress={onSignInPressed} type="TERTIARY"></Custombutton>

            <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsofUsePressed}>Terms of Use</Text> and <Text style={styles.link} onPress={onPrivacyUsePressed}>Privacy policy</Text></Text>
            <SocialSigninButtons></SocialSigninButtons>
           
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
