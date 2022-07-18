import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@screens/Home';
import React from 'react';
import {RootStackParamList} from '../types/navigation';
import {RouteNames} from './routesNames';

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName={RouteNames.HomeScreen}>
      <Tab.Screen name={RouteNames.HomeScreen} component={Home} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
