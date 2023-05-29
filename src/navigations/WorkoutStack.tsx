import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../constants';
import Navbar from './components/navbar/Navbar';
import WorkoutHomeScreen from '../screens/workout-home';

const WorkoutStack = createStackNavigator();

const WorkoutStackScreen = () => {
  return (
    <WorkoutStack.Navigator
      screenOptions={{
        header: Navbar,
      }}
    >
      <WorkoutStack.Screen
        name={ROUTES.WORKOUT}
        component={WorkoutHomeScreen}
        initialParams={{ initialRoute: true }}
      />
    </WorkoutStack.Navigator>
  );
};

export default WorkoutStackScreen;
