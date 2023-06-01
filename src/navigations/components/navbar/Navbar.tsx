import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useAppTheme } from '../../../utils/use-app-theme';
import { generateRandomWorkoutTime } from '../../../utils/generators';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  deleteAllExercises,
  storeCompletedWorkout,
} from '../../../state/exercises/ExercisesSlice';
import { CompletedWorkout } from '../../../app.interface';

const Navbar = ({ route }: { route: any }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const theme = useAppTheme();

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  const currentdate = format(new Date(), 'dd MMM yyyy');
  const duration = generateRandomWorkoutTime();

  const handleAddExerciseData = () => {
    const workoutData: CompletedWorkout = {
      id: uuidv4(),
      name: 'Afternoon Workout',
      date: currentdate,
      duration: duration,
      exercises: [
        {
          name: 'Squat',
          sets: [
            {
              reps: Math.floor(Math.random() * 5) + 6,
              weight_kilo: (Math.floor(Math.random() * 51) + 50) * 2,
            },
            {
              reps: Math.floor(Math.random() * 5) + 6,
              weight_kilo: (Math.floor(Math.random() * 51) + 50) * 2,
            },
            {
              reps: Math.floor(Math.random() * 5) + 6,
              weight_kilo: (Math.floor(Math.random() * 51) + 50) * 2,
            },
          ],
          total: 123123,
        },
        {
          name: 'Bench',
          sets: [
            {
              reps: Math.floor(Math.random() * 5) + 6,
              weight_kilo: (Math.floor(Math.random() * 51) + 50) * 2,
            },
            {
              reps: Math.floor(Math.random() * 5) + 6,
              weight_kilo: (Math.floor(Math.random() * 51) + 50) * 2,
            },
            {
              reps: Math.floor(Math.random() * 5) + 6,
              weight_kilo: (Math.floor(Math.random() * 51) + 50) * 2,
            },
          ],
          total: 123123,
        },
      ],
    };

    dispatch(storeCompletedWorkout(workoutData));
  };

  const handleDeleteAllExercises = () => {
    dispatch(deleteAllExercises());
  };

  return (
    <>
      <Appbar.Header mode='small' theme={theme}>
        {!route.params?.initialRoute && (
          <Appbar.BackAction onPress={handleBackButtonPress} />
        )}
        <Appbar.Content title={route.name} />
        <Appbar.Action icon='account-circle' onPress={handleAddExerciseData} />
        <Appbar.Action
          icon='dots-vertical'
          onPress={handleDeleteAllExercises}
        />
      </Appbar.Header>
    </>
  );
};

export default Navbar;
