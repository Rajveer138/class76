import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'

import DailyPicScreen from './screens/DailyPic'
import StarMapsScreen from './screens/StarMap'
import SpaceCraftScreen from './screens/Spacecrafts'

export default function App() {
  return (
   
     <StackNavigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.screen name="SpaceCrafts" component={SpaceCraftScreen}/>
        <Stack.screen name="DailyPic" component={DailyPicScreen}/>
        <Stack.screen name="starMap" component={StarMapsScreen}/>
     </StackNavigator>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
