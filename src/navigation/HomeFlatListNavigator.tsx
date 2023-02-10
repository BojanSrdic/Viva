import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { ROUTES } from '../constants/United';
import Home from '../screens/tabs/Home'
import Breathing from '../screens/modules/Breathing';

const Stack = createStackNavigator();

function SettingsNavigator() {
  console.log(Stack);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.SETTINGS}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Breathing" component={Breathing} />
    </Stack.Navigator>
  );
}

export default SettingsNavigator;