import {RouteNames} from '@navigation/routesNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/types/navigation';
import React from 'react';
import SignUpView from './components/SignUpView';

export interface LoginProps
  extends NativeStackScreenProps<RootStackParamList, RouteNames.SignUpScreen> {}

export default function SignUp(props: LoginProps) {
  return <SignUpView {...props} />;
}
