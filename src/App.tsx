import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';
import MainAppNavigator from './navigations/MainNavigator';
import { DarkAppTheme, LightAppTheme } from './theme/theme';

export function App() {
  const colorScheme = useColorScheme();

  const paperTheme =
    colorScheme !== 'dark'
      ? { ...MD3LightTheme, ...LightAppTheme }
      : { ...MD3DarkTheme, ...DarkAppTheme };

  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer>
        <MainAppNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
