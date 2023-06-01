import React from 'react';
import { ROUTES } from '../constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabNavigator from './components/tab-navigator/TabNavigator';
import ExercisesStackScreen from '../stacks/exercise-stack/ExercisesStack';
import WorkoutStackScreen from '../stacks/workout-stack/WorkoutStack';
import HistoryStackScreen from '../stacks/history-stack/HistoryStack';

const Tab = createBottomTabNavigator();

const MainAppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.WORKOUTSTACK}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <TabNavigator
          navigation={navigation}
          state={state}
          descriptors={descriptors}
          insets={insets}
        />
      )}
    >
      <Tab.Screen
        name={ROUTES.HISTORYSTACK}
        component={HistoryStackScreen}
        initialParams={{ initialRoute: false }}
      />
      <Tab.Screen
        name={ROUTES.WORKOUTSTACK}
        component={WorkoutStackScreen}
        initialParams={{ initialRoute: true }}
      />
      <Tab.Screen
        name={ROUTES.EXERCISESSTACK}
        component={ExercisesStackScreen}
        initialParams={{ initialRoute: false }}
      />
    </Tab.Navigator>
  );
};

export default MainAppNavigator;
