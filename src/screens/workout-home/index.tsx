import { StyleSheet, SafeAreaView, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';

// Internal imports
import {
  deleteAllExercises,
  storeCompletedWorkout,
} from '../../state/exercises/ExercisesSlice';
import { generateRandomWorkoutTime } from '../../utils/generators';

// Interface imports
import { CompletedWorkout } from '../../app.interface';
import { useAppTheme } from '../../utils/use-app-theme';

export const WorkoutHomeScreen = () => {
  const dispatch = useDispatch();
  const theme = useAppTheme();

  const currentdate = format(new Date(), 'dd MMM yyyy');
  const duration = generateRandomWorkoutTime();

  const handleAddExerciseData = () => {
    const workoutData: CompletedWorkout = {
      workoutName: 'Afternoon Workout',
      date: currentdate,
      duration: duration,
      exercises: [
        {
          name: 'Squat',
          sets: [
            {
              reps: Math.floor(Math.random() * 5) + 6,
              weight_kilo: (Math.floor(Math.random() * 51) + 50) * 2,
              weight_pounds: Math.floor(Math.random() * 51) + 50,
            },
          ],
        },
      ],
    };

    dispatch(storeCompletedWorkout(workoutData));
  };

  const handleDeleteAllExercises = () => {
    dispatch(deleteAllExercises());
  };

  return (
    <SafeAreaView
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
      }}
    >
      <View>
        <Button onPress={handleAddExerciseData}>Add Exercise Data</Button>
      </View>
      <View>
        <Button
          onPress={handleDeleteAllExercises}
          textColor={theme.colors.error}
        >
          Delete All Exercise Data
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default WorkoutHomeScreen;

const styles = StyleSheet.create({});
