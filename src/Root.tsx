import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import ChatMessage from './ChatMessage';
import Home from './Home';

const Stack = createNativeStackNavigator();

export default function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ChatMessage" component={ChatMessage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
