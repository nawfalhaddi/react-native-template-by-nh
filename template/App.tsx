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
import {ThemeProvider} from '@ui/theme/styled-components';
import projectNameTheme from '@ui/theme';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from '@lib/react-query';
import '@translation/language-detector';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();
const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={projectNameTheme}>
            <NavigationContainer>
              <RootNavigation />
            </NavigationContainer>
          </ThemeProvider>
        </PersistGate>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
