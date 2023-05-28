import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './navigations/MainNavigator';

export function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default App;
