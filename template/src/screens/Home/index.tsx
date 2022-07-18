import {RouteNames} from '@navigation/routesNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@root/src/types/navigation';
import React from 'react';
import HomeView from './components/HomeView';

export interface HomeProps
  extends NativeStackScreenProps<RootStackParamList, RouteNames.HomeScreen> {}

export default function Home(props: HomeProps) {
  return <HomeView {...props} />;
}
