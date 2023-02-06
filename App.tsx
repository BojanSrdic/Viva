import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthNavigator from './src/navigation/AuthNavigation';
import Saved from './src/screens/modules/Saved';
import Home from './src/screens/modules/Home';
import AboutUs from './src/screens/modules/AboutUs';
import Login from './src/screens/auth/Login';

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>
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


/* ------------------------------------------------------------------------------------------------------------------------------------------

	1. Navigation 						=>
	2. BottomBarNavigation 				=> https://www.youtube.com/watch?v=I7POH4acHV8&ab_channel=BasirPayenda

  1. Home Screen Card Item Animation  => https://www.youtube.com/watch?v=F8x-dyIsrJ8
  2. Splash Screen Animation          => 
  3. Card Component                   => https://www.youtube.com/watch?v=_Wxt8c50vJc&list=PLucuSZBFj3AY52Y-XjxjABPmrwWHIr0hx&index=7


   ------------------------------------------------------------------------------------------------------------------------------------------ */


