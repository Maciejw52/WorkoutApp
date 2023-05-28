import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ROUTES } from '../constants';
import { SummaryScreen } from '../screens/summary';
import ExerciseScreen from '../screens/exercise';
import { CategoryScreen } from '../screens/category';

const Tab = createMaterialTopTabNavigator();

const AuthNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.SUMMARY}
      tabBarPosition='top'
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { width: 100, height: 50 },
        tabBarStyle: { backgroundColor: 'white' },
      }}
    >
      <Tab.Screen name={ROUTES.SUMMARY} component={SummaryScreen} />
      <Tab.Screen name={ROUTES.EXERCISE} component={ExerciseScreen} />
      <Tab.Screen name={ROUTES.CATEGORY} component={CategoryScreen} />
    </Tab.Navigator>
  );
};

export default AuthNavigator;
