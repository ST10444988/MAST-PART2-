import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen';
import HomePage from './HomePage';
import CourseSelectionScreen from './CourseSelectionScreen';
import AddEditMenuItemScreen from './AddEditMenuItemScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="CourseSelection" component={CourseSelectionScreen} />
        <Stack.Screen name="AddEditMenu" component={AddEditMenuItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
