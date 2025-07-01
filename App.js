import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen.js';
import LoopPage from './LoopPage.js';
import ecopage from './economics.js';
import looppage2 from './loop2.js';
import messagepage from './message.js';
import looppage3 from './loop3.js';
import Noficationspage from './Nofications.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Loop" component={LoopPage} />
        <Stack.Screen name="eco" component={ecopage} />
        <Stack.Screen name="loop2" component={looppage2} />
        <Stack.Screen name="loop3" component={looppage3} />
        <Stack.Screen name="message" component={messagepage} />
        <Stack.Screen name="nofication" component={Noficationspage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
