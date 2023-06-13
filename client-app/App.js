import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainPage from './MainPage';
import HomePage from './HomePage';
import * as Linking from 'expo-linking';
import ScanAuth from './ScanAuth';

// npx uri-scheme open exp://192.168.179.116:19000/--/auth --android

const prefix = Linking.createURL('/');
const linking = {
  prefixes: [prefix],
  config:{
    screens:{
      Home: "/home",
      Auth: "/auth",
      Scan: '/scan',
    }
  }
}
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Scan' >
        <Stack.Screen name='Home' component={HomePage} />
        <Stack.Screen name='Auth' component={MainPage} />
        <Stack.Screen name='Scan' component={ScanAuth} />
      </Stack.Navigator>
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