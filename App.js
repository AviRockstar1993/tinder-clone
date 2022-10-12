/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BirthdayScreen from './src/screens/BirthdayScreen';
import NameScreen from './src/screens/NameScreen';
import OrientationScreen from './src/screens/OrientationScreen';
import ShowMeScreen from './src/screens/ShowMeScreen';
import UniversityName from './src/screens/UniversityScreen';
import UserGenderScreen from './src/screens/UserGenderScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import Interest from './src/screens/Interests';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={WelcomeScreen} name="Home" />
        <Stack.Screen component={NameScreen} name="Name" />
        <Stack.Screen component={BirthdayScreen} name="Birthday" />
        <Stack.Screen component={UserGenderScreen} name="Gender" />
        <Stack.Screen component={ShowMeScreen} name="Showme" />
        <Stack.Screen component={UniversityName} name="University" />
        <Stack.Screen component={OrientationScreen} name="Orientation" />
        <Stack.Screen component={Interest} name="Interest" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
