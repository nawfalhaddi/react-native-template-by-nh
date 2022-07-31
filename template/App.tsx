import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {persistor, store} from '@store';
import React from 'react';
import {Provider} from 'react-redux';
import RootNavigation from '@navigation/RootNavigation';
import {RootStackParamList} from './src/types/navigation';
import {PersistGate} from 'redux-persist/integration/react';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
