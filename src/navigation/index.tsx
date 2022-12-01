import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Description} from '../pages';
import {HomeStackParamList} from './types';

const Routes = () => {
  const Stack = createNativeStackNavigator<HomeStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HOME">
        <Stack.Screen
          options={{headerShown: false}}
          name="HOME"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="DESCRIPTION"
          component={Description}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
