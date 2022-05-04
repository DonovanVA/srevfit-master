import { View, Text } from 'react-native'
import React from 'react'
import Custombutton from '../custombutton/Custombutton';


export default function SocialSigninButtons() {
    const onSignInFacebook=()=>{
        console.warn('onSignInFacebook');
    }
    const onSignInGoogle=()=>{
        console.warn('onSignInGoogle');
    }
    const onSignInApple=()=>{
        console.warn('onSignInApple');
    }

  return (
    <View>
        <Custombutton 
            text ="Sign In with Facebook" 
            onPress={onSignInFacebook}
            bgColor="#E7EAF4"
            fgColor="#4765A9"
            ></Custombutton>
            <Custombutton 
            text ="Sign In with Google" 
            onPress={onSignInGoogle}
            bgColor="#FAE9EA"
            fgColor="#DD4D44"
            ></Custombutton>
            <Custombutton 
            text ="Sign In with Apple" 
            onPress={onSignInApple}
            bgColor="#E3E3E3"
            fgColor="#363636"
            ></Custombutton>
          
    </View>
  )
}