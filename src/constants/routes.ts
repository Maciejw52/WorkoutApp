import { RouteProp } from '@react-navigation/native';

// Define your screen names as string literals
export const ROUTES = {
  MAINAPPNAVIGATOR: 'MainAppNavigator',
  HISTORYSTACK: 'HistoryStack',
  WORKOUTSTACK: 'WorkoutStack',
  EXERCISESSTACK: 'ExercisesStack',
  EXERCISES: 'Exercises',
  EXERCISES_DESCRIPTION: 'ExerciseDescription',
  HISTORY: 'History',
  WORKOUT: 'Workout',
  // Add more screen names as needed
};

// Define the param list for each screen
export type RootStackParamList = {
  MainAppNavigator: undefined;
  HistoryStack: undefined;
  History: { initialRoute: boolean };

  WorkoutStack: undefined;
  Workout: { initialRoute: boolean };

  ExercisesStack: undefined;
  Exercises: { initialRoute: boolean };
  ExerciseDescription: { initialRoute: boolean };
};

// Define the route prop for accessing params in each screen component
export type RootRouteProp<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
