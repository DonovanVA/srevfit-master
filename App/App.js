import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import {TailwindProvider, useTailwind} from 'tailwind-rn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Profile from'./screens/Profile';
import Exercises from './screens/Exercises';
import Home from './screens/Home';
import Tools from './screens/Tools';
import Community from './screens/Community';
import { useState } from 'react';

// dummy workout data
const data={
  '2022-04-18': [{"Exercise":"Triangle bound","Type":"movement","Intensity":0.4,"Unit":"reps","Muscle Group":"na"},{"Exercise":"lateral bound","Type":"movement","Intensity":0.3,"Unit":"reps","Muscle Group":"na"},{"Exercise":"Airplane","Type":"movement","Intensity":0.3,"Unit":"reps","Muscle Group":"na"},{"Exercise":"pogo hops","Type":"leg-plyo","Intensity":0.4,"Unit":"reps","Muscle Group":"na"},{"Exercise":"Box jump","Type":"leg-plyo","Intensity":0.3,"Unit":"reps","Muscle Group":"na"},{"Exercise":"RFESS iso","Type":"leg-isometric","Intensity":0.8,"Unit":"reps","Muscle Group":"leg"},{"Exercise":"Shoulder bridge march","Type":"leg-isometric","Intensity":0.5,"Unit":"reps","Muscle Group":"glutes"}],
  '2022-04-19': [{"Exercise":"Leg climb","Type":"Core","Intensity":0.65,"Unit":"reps","Muscle Group":"core"},{"Exercise":"Rocking deadbug","Type":"Core","Intensity":0.65,"Unit":"reps","Muscle Group":"core"},{"Exercise":"Hip flexor CAR","Type":"Flexibility","Intensity":0.2,"Unit":"reps","Muscle Group":"na"},{"Exercise":"Angels","Type":"Flexibility","Intensity":0.2,"Unit":"seconds","Muscle Group":"na"},{"Exercise":"Leg kicks","Type":"Flexibility","Intensity":0.2,"Unit":"reps","Muscle Group":"na"},{"Exercise":"90\/90","Type":"Flexibility","Intensity":0.2,"Unit":"reps","Muscle Group":"na"}],
  '2022-04-20': [{"Exercise":"lateral bound","Type":"movement","Intensity":0.3,"Unit":"reps","Muscle Group":"na"},{"Exercise":"Airplane","Type":"movement","Intensity":0.3,"Unit":"reps","Muscle Group":"na"},{"Exercise":"Triangle bound","Type":"movement","Intensity":0.4,"Unit":"reps","Muscle Group":"na"},{"Exercise":"Box jump","Type":"leg-plyo","Intensity":0.3,"Unit":"reps","Muscle Group":"na"},{"Exercise":"crossover step","Type":"leg-plyo","Intensity":0.4,"Unit":"reps","Muscle Group":"na"},{"Exercise":"Depth jump","Type":"leg-plyo","Intensity":0.6,"Unit":"reps","Muscle Group":"na"}],
  '2022-04-21': [{"Exercise":"Leg climb","Type":"Core","Intensity":0.65,"Unit":"reps","Muscle Group":"core"},{"Exercise":"Rocking deadbug","Type":"Core","Intensity":0.65,"Unit":"reps","Muscle Group":"core"},{"Exercise":"Hip flexor CAR","Type":"Flexibility","Intensity":0.2,"Unit":"reps","Muscle Group":"na"},{"Exercise":"Angels","Type":"Flexibility","Intensity":0.2,"Unit":"seconds","Muscle Group":"na"},{"Exercise":"Leg kicks","Type":"Flexibility","Intensity":0.2,"Unit":"reps","Muscle Group":"na"},{"Exercise":"90\/90","Type":"Flexibility","Intensity":0.2,"Unit":"reps","Muscle Group":"na"}],
  '2022-04-22': [{"Exercise":"Triangle bound","Type":"movement","Intensity":0.4,"Unit":"reps","Muscle Group":"na"},{"Exercise":"lateral bound","Type":"movement","Intensity":0.3,"Unit":"reps","Muscle Group":"na"},{"Exercise":"Airplane","Type":"movement","Intensity":0.3,"Unit":"reps","Muscle Group":"na"},{"Exercise":"pogo hops","Type":"leg-plyo","Intensity":0.4,"Unit":"reps","Muscle Group":"na"},{"Exercise":"Box jump","Type":"leg-plyo","Intensity":0.3,"Unit":"reps","Muscle Group":"na"},{"Exercise":"RFESS iso","Type":"leg-isometric","Intensity":0.8,"Unit":"reps","Muscle Group":"leg"},{"Exercise":"Shoulder bridge march","Type":"leg-isometric","Intensity":0.5,"Unit":"reps","Muscle Group":"glutes"}],

}
// dummy workout data




export default function App() {
  const tailwind = useTailwind();
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  


  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={({route})=>({
        tabBarIcon: ({
          focused,color,size
        })=>{
          let iconName;
          let rn = route.name;

          if(rn === 'Home'){
            iconName = focused? 'home':'home-outline'
          }
          else if(rn === 'Tools'){
            iconName = focused? 'logo-ionic': 'logo-ionic';

          }
          else if(rn === 'Community'){
            iconName = focused? 'ios-information': 'ios-information-outline';

          }
          else if(rn === 'Exercises'){
            iconName = focused? 'list': 'list-outline';

          }
          else if(rn === 'Profile'){
            iconName = focused? 'options': 'options-outline';

          }

          return <Ionicons name = {iconName} size ={size} color = {color} />

        },

      })}
      tabBarOptions={{
        activeTinColor: 'tomato',
        inactiveTintColor: 'grey',
        labelStyle:{paddingBottom: 0, fontSize:10},
        style: {padding:10, height:80}
      }}
      
      >
      
      <Tab.Screen options={{headerShown: false}} name ='Tools' children={()=><Tools></Tools>}></Tab.Screen>
      <Tab.Screen options={{headerShown: false}} name ='Community' children={()=><Community></Community>}></Tab.Screen>
      <Tab.Screen options={{headerShown: false}} name ='Home' children={()=><Home data ={data}></Home>}></Tab.Screen>
      <Tab.Screen options={{headerShown: false}} name ='Exercises' children={()=><Exercises></Exercises>}></Tab.Screen>
      <Tab.Screen options={{headerShown: false}} name ='Profile' children={()=><Profile></Profile>}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

// navbar (5 buttons): Tools, plan(cal), home, exercises, profile + DROPDOWN calender
// 1. Tools: {open CV + list of recordings}
// 2. plan: {generate new plan --> form submission (stack)} + {review current plan}
// 3. home: {calender | workouts (dashboard) --> videos and info (stack)}
// 4. exercises: {(flatlist) list of exercises --> videos and info (stack)}
// 5. profile: {profile dashboard --> manage authentication(stack)} + {graph (stack)}
// All segments require database



