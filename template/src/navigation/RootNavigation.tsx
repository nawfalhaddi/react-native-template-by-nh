import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@screens/Home';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {RootStackParamList} from '../types/navigation';
import {RouteNames} from './routesNames';
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  const {t} = useTranslation();
  return (
    <Stack.Navigator initialRouteName={RouteNames.HomeScreen}>
      <Stack.Screen
        name={RouteNames.HomeScreen}
        options={{title: 'Features List'}}
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
