import React from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import { ROUTES, RootStackParamList } from '../constants/routes';
import AllExerciseScreen from '../stacks/exercise-stack/all-exercises';
import Navbar from './components/navbar/Navbar';
import ExerciseDescriptionScreen from '../stacks/exercise-stack/exercise-description/exercise-description-screen';
import { RouteProp } from '@react-navigation/native';

type ExercisesStackScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
  route: RouteProp<RootStackParamList, keyof RootStackParamList>;
};

const ExercisesStack = createStackNavigator<RootStackParamList>();

const ExercisesStackScreen: React.FC<ExercisesStackScreenProps> = ({
  navigation,
}) => {
  return (
    <ExercisesStack.Navigator
      detachInactiveScreens
      initialRouteName={'Exercises'}
      screenOptions={{
        header: Navbar,
        presentation: 'modal',
        gestureDirection: 'horizontal',
      }}
    >
      <ExercisesStack.Screen
        name={'Exercises'}
        component={AllExerciseScreen}
        initialParams={{ initialRoute: true }}
      />
      <ExercisesStack.Screen
        name={'ExerciseDescription'}
        component={ExerciseDescriptionScreen}
        initialParams={{ initialRoute: false }}
      />
    </ExercisesStack.Navigator>
  );
};

export default ExercisesStackScreen;
