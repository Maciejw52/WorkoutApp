import React from 'react';
import { ROUTES } from '../constants';

import ExercisesStackScreen from '../stacks/exercise-stack/ExercisesStack';
import WorkoutStackScreen from '../stacks/workout-stack/WorkoutStack';
import HistoryStackScreen from '../stacks/history-stack/HistoryStack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useAppTheme } from '../utils/use-app-theme';
import { DarkAppTheme, LightAppTheme } from '../theme/theme';
import { useColorScheme } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

const MainAppNavigator = () => {
  const theme = useAppTheme();
  const colorScheme = useColorScheme();
  const paperTheme =
    colorScheme !== 'dark' ? { ...LightAppTheme } : { ...DarkAppTheme };

  return (
    <Tab.Navigator
      activeColor={theme.colors.secondary}
      sceneAnimationEnabled
      sceneAnimationType='shifting'
      theme={paperTheme}
      initialRouteName={ROUTES.WORKOUTSTACK}
      keyboardHidesNavigationBar={true}
      screenOptions={{}}
      barStyle={{ backgroundColor: theme.colors.backdrop }} // Set background color using the theme
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
          tabBarIcon: 'home',
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
