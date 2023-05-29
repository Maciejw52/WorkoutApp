import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import MainAppNavigator from './navigations/MainNavigator';
import { DarkAppTheme, LightAppTheme } from './theme/theme';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './state/store';
import { useAppTheme } from './utils/use-app-theme';

export function App() {
  const colorScheme = useColorScheme();
  const theme = useAppTheme();

  const paperTheme =
    colorScheme !== 'dark' ? { ...LightAppTheme } : { ...DarkAppTheme };

  const barStyle = colorScheme !== 'dark' ? 'dark-content' : 'light-content';

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={paperTheme}>
          <NavigationContainer>
            <StatusBar
              barStyle={barStyle}
              backgroundColor={paperTheme.colors.background}
            />
            <MainAppNavigator />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
