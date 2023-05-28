import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';
import MainAppNavigator from './navigations/MainNavigator';
import { DarkAppTheme, LightAppTheme } from './theme/theme';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './state/store';

export function App() {
  const colorScheme = useColorScheme();

  const paperTheme =
    colorScheme !== 'dark'
      ? { ...MD3LightTheme, ...LightAppTheme }
      : { ...MD3DarkTheme, ...DarkAppTheme };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={paperTheme}>
          <NavigationContainer>
            <MainAppNavigator />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
