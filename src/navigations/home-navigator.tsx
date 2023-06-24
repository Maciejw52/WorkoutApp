import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList, ROUTES } from '../constants/routes';
import Navbar from './components/navbar/Navbar';
import WorkoutHomeScreen from '../stacks/workout-stack/workout-home';

type WorkoutStackScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
  route: RouteProp<RootStackParamList, keyof RootStackParamList>;
};

const WorkoutStack = createStackNavigator<RootStackParamList>();

const WorkoutStackScreen: React.FC<WorkoutStackScreenProps> = ({
  navigation,
}) => {
  return (
    <WorkoutStack.Navigator
      screenOptions={{
        header: Navbar,
      }}
    >
      <WorkoutStack.Screen
        name={'Workout'}
        component={WorkoutHomeScreen}
        initialParams={{ initialRoute: true }}
      />
    </WorkoutStack.Navigator>
  );
};

export default WorkoutStackScreen;
