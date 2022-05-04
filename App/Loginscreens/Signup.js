import { useState } from 'react';
import { View, Text,Image, useWindowDimensions,StyleSheet,SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import Custominput from '../custominput/Custominput'
import Custombutton from '../custombutton/Custombutton';
import SocialSigninButtons from '../socialsigninbuttons/SocialSigninButtons';
import { useNavigation } from '@react-navigation/native';
import { AccountContext } from './AccountContext';
export default function Signup({accdetails}) {
    const [username,setUsername] = useState('');
    const[email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const[passwordRepeat,setPasswordRepeat] = useState('');
    const[duplicate,setDuplicate]=useState(false)
    const navigation = useNavigation()
    const onTermsofUsePressed=()=>{
        console.warn('onTermsofUsePressed')
    }
    const onPrivacyUsePressed=()=>{
        console.warn('onPrivacyPressed')
    }
    const onSignInPressed=()=>{
        console.warn('Sign in');
        navigation.navigate('SignIn')
    }
    var newaccount={"email":"","phone_number":"","pw":"","userid":"","workout_plan":null}
    var url ="http://localhost:5002/store"
    const submit=(e)=> {
        e.preventDefault()
        var uname = username;
        var em = email;
        var pword=password;
        var pword2 = passwordRepeat;
        console.log(uname)
        console.log(pword)

    if((pword===pword2)&&(pword.length>8)&&(uname.length>0)&&em.length>0){
        fetch(url, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(
            {
                userid:uname,
                email:em,
                pw:pword
            }

          ),
        })
          .catch(err => {
            return;
          })
          .then(res => {
            if (!res || !res.ok || res.status >= 400) {
              return;
            }
            return res.json();
          })
          .then(data => {
            if (!data) return;
            if (data.status) {
                setDuplicate(true)
            } else if (data.loggedIn) {
                setDuplicate(false)
              navigation.navigate("Dashboard");
            }
          });
        
    }
    else{}

    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style = {styles.root}>
        
            <Text style={styles.title}>Create an account</Text>
            <Custominput 
            placeholder = "Username" 
            value={username} 
            setValue={setUsername}
            secureTextEntry={false}
            ></Custominput>
            <Custominput 
            placeholder = "Email" 
            value={email} 
            setValue={setEmail}
            secureTextEntry={false}
            ></Custominput>
            {duplicate?<Text>Email is already used</Text>:<></>}
            <Custominput 
            placeholder = "Password" 
            value={password} 
            setValue={setPassword}
            secureTextEntry={true}
            ></Custominput>

            <Custominput 
            placeholder = "Repeat Password" 
            value={passwordRepeat} 
            setValue={setPasswordRepeat}
            secureTextEntry={true}
            ></Custominput>
            <Text>Passwords must match!</Text>
            {(username.length>0&&password.length>8&&email.length>0)?
            <></>:<Text>Fill in all required fields+password must be more than 8 characters long</Text>
            }
            <Custombutton
            text ="Register"
            onPress={submit}
            type="PRIMARY"
            ></Custombutton>
            <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsofUsePressed}>Terms of Use</Text> and <Text style={styles.link} onPress={onPrivacyUsePressed}>Privacy policy</Text></Text>
            <SocialSigninButtons></SocialSigninButtons>
            <Custombutton
            text ="Have an account? Sign in"
            onPress={onSignInPressed}
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
