import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '@screens/Login';
import SignUp from '@screens/SignUp';
import {RootStackParamList} from '../types/navigation';
import {RouteNames} from './routesNames';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={RouteNames.LoginScreen}>
      <Stack.Screen name={RouteNames.LoginScreen} component={Login} />
      <Stack.Screen name={RouteNames.SignUpScreen} component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
