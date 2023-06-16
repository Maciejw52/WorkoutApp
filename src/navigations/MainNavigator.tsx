import React from 'react';
import { ROUTES } from '../constants';

import ExercisesStackScreen from '../stacks/exercise-stack/ExercisesStack';
import WorkoutStackScreen from '../stacks/workout-stack/WorkoutStack';
import HistoryStackScreen from '../stacks/history-stack/HistoryStack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useAppTheme } from '../utils/use-app-theme';

const Tab = createMaterialBottomTabNavigator();

const MainAppNavigator = () => {
  const theme = useAppTheme();
  return (
    <Tab.Navigator
      theme={theme}
      initialRouteName={ROUTES.WORKOUTSTACK}
      keyboardHidesNavigationBar={true}
      screenOptions={{}}
    >
      <Tab.Screen
        name={ROUTES.HISTORYSTACK}
        options={{
          tabBarIcon: 'chart-areaspline',
        }}
        component={HistoryStackScreen}
        initialParams={{ initialRoute: false }}
      />
      <Tab.Screen
        name={ROUTES.WORKOUTSTACK}
        options={{
          tabBarIcon: 'dumbbell',
        }}
        component={WorkoutStackScreen}
        initialParams={{ initialRoute: true }}
      />
      <Tab.Screen
        name={ROUTES.EXERCISESSTACK}
        options={{
          tabBarIcon: 'arm-flex',
        }}
        component={ExercisesStackScreen}
        initialParams={{ initialRoute: false }}
      />
    </Tab.Navigator>
  );
};

export default MainAppNavigator;
