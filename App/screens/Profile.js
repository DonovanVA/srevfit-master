import { View, Text,StyleSheet,SafeAreaView } from 'react-native'
import React from 'react'
import Signin from '../Loginscreens/Signin';
import Signup from '../Loginscreens/Signup';
import ConfirmEmail from '../Loginscreens/ConfirmEmail';
import ForgotPassword from '../Loginscreens/ForgotPassword';
import { useState } from 'react';
import NewPassword from '../Loginscreens/NewPassword';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../Loginscreens/Dashboard';
import UserContext from '../Loginscreens/AccountContext';

export default function Profile({accdetails}) {
  const Stack = createNativeStackNavigator()
  return (
    
    <SafeAreaView style={styles.root}>
      <Stack.Navigator>
        
        <Stack.Screen name="SignIn" children={()=><Signin accdetails={accdetails}></Signin>}/>
        <Stack.Screen name="SignUp"children={()=><Signup accdetails={accdetails}></Signup>} />
        <Stack.Screen name="ConfirmEmail" children={()=><ConfirmEmail accdetails={accdetails}></ConfirmEmail>}/>
        <Stack.Screen name="ForgotPassword" children={()=><ForgotPassword accdetails={accdetails}></ForgotPassword>}/>
        <Stack.Screen name ='NewPassword' children={()=><NewPassword accdetails={accdetails}></NewPassword>}/>
        <Stack.Screen name ="Dashboard" children={()=><Dashboard accdetails={accdetails}></Dashboard>}/>

      </Stack.Navigator>
      
    </SafeAreaView>
      
  );
};

const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:"#F9FBFC",




  }

})




