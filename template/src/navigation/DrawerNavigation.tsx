import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeWrapper from '@screens/Home';
import React from 'react';
import {RootStackParamList} from '../types/navigation';
import {RouteNames} from './routesNames';
const Stack = createNativeStackNavigator<RootStackParamList>();

const DrawerNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={RouteNames.HomeScreen}>
      <Stack.Screen name={RouteNames.HomeScreen} component={HomeWrapper} />
    </Stack.Navigator>
  );
};

export default DrawerNavigation;
