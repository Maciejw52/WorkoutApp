import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ROUTES } from '../constants';
import { SummaryScreen } from '../screens/summary';
import { AllExerciseScreen } from '../screens/all-exercises';
import { CategoryScreen } from '../screens/category';
import { Appbar, BottomNavigation, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { CommonActions } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const MainNavigator = () => {
  const theme = useTheme();
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title='Workout Log' />
      </Appbar.Header>
      <Tab.Navigator
        initialRouteName={ROUTES.SUMMARY}
        style={{ backgroundColor: theme.colors.background }}
      >
        <Tab.Screen
          name={ROUTES.SUMMARY}
          component={SummaryScreen}
          options={{
            tabBarIcon: 'chart-areaspline',
            tabBarLabel: 'Summary',
          }}
        />
        <Tab.Screen
          name={ROUTES.EXERCISE}
          component={AllExerciseScreen}
          options={{
            tabBarIcon: 'dumbbell',
            tabBarLabel: 'Exercises',
          }}
        />
        <Tab.Screen
          name={ROUTES.CATEGORY}
          component={CategoryScreen}
          options={{
            tabBarIcon: 'tag',
            tabBarLabel: 'Categories',
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default MainNavigator;
