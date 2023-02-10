import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/tabs/Home';
import Saved from '../screens/tabs/Saved';
import AboutUs from '../screens/tabs/AboutUs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import SettingsNavigator from './HomeFlatListNavigator';
import { ROUTES } from '../constants/United';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,        
        }} >
      
      <Tab.Screen name="Home" component={SettingsNavigator} options={{
        headerShown: false,
        tabBarIcon: ({ color }) => <TabBarIcon name="home-outline" color={color} />,
      }}/>
      <Tab.Screen name="Saved" component={Saved} options={{
        headerShown: false,
        tabBarIcon: ({ color }) => <TabBarIcon name="heart-outline" color={color} />,
      }}/>
      <Tab.Screen name="About" component={AboutUs} options={{
        headerShown: false,
        tabBarIcon: ({ color }) => <TabBarIcon name="alien-outline" color={color} />,
      }}/>

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    tabBarStyle: {
      position: 'absolute',
      backgroundColor: '#252525',
      borderTopWidth: 0,
      bottom: 20,
      right: 10,
      left: 10, 
      borderRadius: 15,
    },
  });

function TabBarIcon(props: {
    name: React.ComponentProps<typeof MaterialCommunityIcons>['name']; color: string; }) {
    return <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} {...props} />;
  }

export default BottomTabNavigator;