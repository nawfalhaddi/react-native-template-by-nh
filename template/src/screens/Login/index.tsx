import {RouteNames} from '@navigation/routesNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/types/navigation';
import React from 'react';
import LoginView from './components/LoginView';

export interface LoginProps
  extends NativeStackScreenProps<RootStackParamList, RouteNames.LoginScreen> {}

export default function Login(props: LoginProps) {
  return <LoginView {...props} />;
}
