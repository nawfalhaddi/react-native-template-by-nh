import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import React from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import {RootStackParamList} from './src/types/navigation';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default App;
