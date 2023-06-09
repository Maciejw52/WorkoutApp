import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import MainAppNavigator from './navigations/main-navigator';

import { DarkAppTheme, LightAppTheme } from './theme/theme';
import { Theme } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { enableScreens } from 'react-native-screens';
import { persistor, store } from './redux-store/store';

enableScreens();

export function AppWithoutProvider() {
  const colorScheme = useColorScheme();
  const paperTheme =
    colorScheme !== 'dark' ? { ...LightAppTheme } : { ...DarkAppTheme };

  const barStyle = colorScheme !== 'dark' ? 'dark-content' : 'light-content';

  const navigationTheme: Theme = {
    dark: paperTheme.dark,
    colors: {
      primary: paperTheme.colors.primary,
      background: paperTheme.colors.background,
      card: paperTheme.colors.backdrop,
      text: paperTheme.colors.onPrimary,
      border: paperTheme.colors.surface,
      notification: paperTheme.colors.primary,
    },
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar
        barStyle={barStyle}
        backgroundColor={paperTheme.colors.background}
      />
      <MainAppNavigator />
    </NavigationContainer>
  );
}

export const App = () => {
  const colorScheme = useColorScheme();

  const paperTheme =
    colorScheme !== 'dark' ? { ...LightAppTheme } : { ...DarkAppTheme };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={paperTheme}>
          <AppWithoutProvider />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
