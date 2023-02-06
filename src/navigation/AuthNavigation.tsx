import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/auth/Login';
import ForgotPassword from '../screens/auth/ForgotPassword';
import Register from '../screens/auth/Register';
import { COLORS, ROUTES } from '../constants/United';
import BottomTabNavigator from './BottomTabNavigator';


const Stack = createStackNavigator();
// This stack will return the object that has Navigator, Screen, Group

function AuthNavigator () {
  return (
    <Stack.Navigator screenOptions={{
      headerTintColor:  COLORS.black,
      headerBackTitle: 'Back',
      //headerShown: false,
      //headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: COLORS.primary
      }
    }} initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.LOGIN} component={Login} options={{headerShown: false}}/>
      <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen name={ROUTES.HOME_SCREEN} component={BottomTabNavigator} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default AuthNavigator;
