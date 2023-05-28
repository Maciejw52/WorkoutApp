import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './navigations/MainNavigator';
import { IconComponentProvider } from '@react-native-material/core';

export function App() {
  return (
    <>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </>
  );
}

export default App;
