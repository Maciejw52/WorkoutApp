import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../../constants';
import HistoryScreen from './history';
import Navbar from '../../navigations/components/navbar/Navbar';

const HistoryStack = createStackNavigator();

const HistoryStackScreen = () => {
  return (
    <HistoryStack.Navigator
      screenOptions={{
        header: Navbar,
      }}
    >
      <HistoryStack.Screen
        initialParams={{ initialRoute: true }}
        name={ROUTES.HISTORY}
        component={HistoryScreen}
      />
    </HistoryStack.Navigator>
  );
};

export default HistoryStackScreen;
