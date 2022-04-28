import { View, Text,StyleSheet,FlatList } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { ScreenStackHeaderLeftView } from 'react-native-screens';
import {Calendar, CalendarList, Agenda, CalendarProvider} from 'react-native-calendars'

import { useState } from 'react';
// the render functions will render the item
export default function Home({data}) {
  const navigation=useNavigation()
  const Stack = createNativeStackNavigator()
  
 
  const Start ={
    first:'2022-01-01',
    curr:'2022-04-20',
    end:'2022-12-31',
    selected:'2022-04-20',
    currmonth:'April-2022',
    back:'< back'
  }



  
  
  //var allAgendaDates=[]
  //for(var k in items) allAgendaDates.push(k);
  //console.log(allAgendaDates)
  
  

  const renderitem=(item)=>{
    return(
    
      <View>
       <Text>{item.Exercise}</Text>
      </View>
    )
    
  }
  const renderempty=(item)=>{
    return(
      <View>
        <Text>
          No workout (rest!)
        </Text>
      </View>


    )
  }

  const renderday =()=>{
    return(
      <View>
        <Text>

        </Text>
      </View>


    )
  }
  return (
    <>
    
    <Text style ={styles.calheader}>{Start.currmonth}</Text>
    <Agenda 
    
    ////////////////1. Clickable dates-set limits to list//////////////
    //////////////////////////////////////////////////////////////////////
    items ={data}
    minDate={Start.first}
    maxDate={Start.end}
    
    selected={Start.selected}
    firstDay={1}
    //Min/Max amount of months allowed to scroll to the past. Default = 50
    pastScrollRange={24}
    futureScrollRange={24}
    //Min/Max amount of months allowed to scroll to the past. Default = 50
    //////////////////////////////////////////////////////////////////////
    
    ////////////////2. Event handlers/////////////////
    //////////////////////////////////////////////////////////////////////
    loadItemsForMonth={month => {
      console.log('trigger items loading');
    }}
    onCalendarToggled={calendarOpened => {
      
      console.log(calendarOpened)
    }}
    
    //////////////////////////////////////////////////////////////////////
  
    ////////////////3. Render items//////////////////
    //////////////////////////////////////////////////////////////////////
    
    // Specify how each date should be rendered. day can be undefined if the item is not first in that day
    renderEmptyData={renderempty}
    renderItem={renderitem}
    renderDay={(day, item) => {
      return <View />;
    }}
   
    ///////////////////////////////////////////////////////////////////////
    ////////////////4. Gestures//////////////////
    //////////////////////////////////////////////////////////////////////
    showClosingKnob={true}
    refreshing={true}
    rowHasChanged={(r1, r2) => {
      return r1.text !== r2.text;
    }}
    //////////////////////////////////////////////////////////////////////
    ///////////////5. colours/////////////////////
    //////////////////////////////////////////////////////////////////////
    style={{}}
    //////////////////////////////////////////////////////////////////////
    
    />
    </>

  )
}
/*<Stack.Navigator initialRouteName='dashboard'>
<Stack.Screen name ='calender' component ={Calender} />
<Stack.Screen options={{headerShown: false}} name='dashboard' component ={Dashboard}/>
</Stack.Navigator>*/

const styles = StyleSheet.create({
  calheader:{
    fontSize:25,
    height:30,
    textAlign:'center'
  },
  calback:{
    fontSize:25,
    height:30,
    textAlign:'left',
    

  }

})