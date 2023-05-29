import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../constants';
import AllExerciseScreen from '../screens/all-exercises';
import Navbar from './components/navbar/Navbar';

const ExercisesStack = createStackNavigator();

const ExercisesStackScreen = () => {
  return (
    <ExercisesStack.Navigator
      screenOptions={{
        header: Navbar,
      }}
    >
      <ExercisesStack.Screen
        name={ROUTES.EXERCISES}
        component={AllExerciseScreen}
        initialParams={{ initialRoute: true }}
      />
    </ExercisesStack.Navigator>
  );
};

export default ExercisesStackScreen;
