import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthNavigator from './src/navigation/AuthNavigation';
import Saved from './src/screens/tabs/Saved';
import Home from './src/screens/tabs/Home';
import AboutUs from './src/screens/tabs/AboutUs';
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

	1. Navigation 						    =>
	2. BottomBarNavigation 				=> https://www.youtube.com/watch?v=I7POH4acHV8&ab_channel=BasirPayenda

  3. Touchable Components       => https://www.youtube.com/watch?v=QhX25YGf8qg 
  4. FlatList Animation         => https://www.youtube.com/watch?v=F8x-dyIsrJ8&ab_channel=CatalinMiron 

  1. Home Screen Card Item Animation  => https://www.youtube.com/watch?v=F8x-dyIsrJ8
  2. Splash Screen Animation          => https://www.youtube.com/watch?v=9zxnxVTqUi0&ab_channel=ReactiveKoding 
  3. Card Component                   => https://www.youtube.com/watch?v=_Wxt8c50vJc&list=PLucuSZBFj3AY52Y-XjxjABPmrwWHIr0hx&index=7


   ------------------------------------------------------------------------------------------------------------------------------------------ */

   // Search https://www.youtube.com/watch?v=b5P6LIjQZEU&list=RDCMUCEv1DI7Iftd2sWE8gcGG9rg&index=2&ab_channel=ReactNativeSchool
   // https://www.youtube.com/watch?v=9_dYFdup-pk&ab_channel=Lu%C3%ADsReisDev

   // https://www.youtube.com/watch?v=7_yRrrDMCwQ&ab_channel=JustinNothling
   



