import React from 'react';
import {
  MaterialBottomTabNavigationProp,
  createMaterialBottomTabNavigator,
} from '@react-navigation/material-bottom-tabs';
import { useAppTheme } from '../utils/use-app-theme';
import { DarkAppTheme, LightAppTheme } from '../theme/theme';
import { useColorScheme } from 'react-native';
import ExercisesStackScreen from './exercises-list-navigator';
import HistoryStackScreen from './history-navigator';
import HomeStackScreen from './home-navigator';
import { RootStackParamList } from '../constants/routes';

type MainAppNavigatorParamList = RootStackParamList & {
  HistoryStack: undefined;
  WorkoutStack: undefined;
  ExercisesStack: undefined;
};

type MainAppNavigatorNavigationProp =
  MaterialBottomTabNavigationProp<MainAppNavigatorParamList>;

const Tab = createMaterialBottomTabNavigator<MainAppNavigatorParamList>();

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
      initialRouteName={'WorkoutStack'}
      keyboardHidesNavigationBar={true}
      screenOptions={{}}
      barStyle={{ backgroundColor: theme.colors.backdrop }} // Set background color using the theme
    >
      <Tab.Screen
        name={'HistoryStack'}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: 'chart-areaspline',
        }}
        component={HistoryStackScreen}
      />
      <Tab.Screen
        name={'WorkoutStack'}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: 'home',
        }}
        component={HomeStackScreen}
        initialParams={{ initialRoute: true }}
      />
      <Tab.Screen
        name={'ExercisesStack'}
        options={{
          tabBarLabel: 'Exercises',
          tabBarIcon: 'arm-flex',
        }}
        component={ExercisesStackScreen}
        initialParams={{ initialRoute: false }}
      />
    </Tab.Navigator>
  );
};

export default MainAppNavigator;
