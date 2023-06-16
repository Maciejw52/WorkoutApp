import * as React from 'react';
import { Button, Dialog, Portal, Text } from 'react-native-paper';
import { useAppTheme } from '../../../utils/use-app-theme';
import { v4 as uuidv4 } from 'uuid';
import { generateRandomWorkoutTime } from '../../../utils/generators';
import { format } from 'date-fns';
import { CompletedWorkout } from '../../../app.interface';
import {
  deleteAllExercises,
  storeCompletedWorkout,
} from '../../../state/exercises/ExercisesSlice';
import { useDispatch } from 'react-redux';

import { faker } from '@faker-js/faker';

const ProfileDialog = ({
  visible,
  hideDialog,
}: {
  visible: boolean;
  hideDialog: () => void;
}) => {
  const theme = useAppTheme();

  const dispatch = useDispatch();

  const handleAddExerciseData = () => {
    const duration = generateRandomWorkoutTime();

    const exerciseTitles = [
      'Afternoon Workout',
      'Morning Workout',
      'Evening Workout',
    ];
    const exerciseNames = [
      'Bicep Curls',
      'Bench Press',
      'Squats',
      'Deadlifts',
      'Push-ups',
      'Lunges',
      'Shoulder Press',
      'Crunches',
      'Tricep Dips',
      'Leg Press',
      'Lat Pulldowns',
      'Plank',
    ];

    const exercises = [];
    // Generate random exercise data
    for (let i = 0; i < faker.number.int({ min: 2, max: 5 }); i++) {
      // Adjust the number of exercises as needed
      const exercise = {
        id: uuidv4(),
        name: exerciseNames[faker.number.int({ min: 0, max: 2 })],
        sets: [],
        total: faker.number.int({ min: 100, max: 1000 }),
      };

      // Generate random sets for the exercise
      const numSets = faker.number.int({ min: 3, max: 6 });
      for (let j = 0; j < numSets; j++) {
        const set = {
          reps: faker.number.int({ min: 6, max: 10 }),
          weight_kilo: faker.number.int({ min: 50, max: 100 }) * 2,
        };
        exercise.sets.push(set);
      }

      exercises.push(exercise);
    }

    const workoutData: CompletedWorkout = {
      id: uuidv4(),
      name: exerciseTitles[faker.number.int({ min: 0, max: 2 })],
      date: format(faker.date.past(), 'dd MMM yyyy'),
      duration: duration,
      exercises: exercises,
    };

    dispatch(storeCompletedWorkout(workoutData));
  };

  const handleDeleteAllExercises = () => {
    dispatch(deleteAllExercises());
  };

  return (
    <>
      <Portal>
        <Dialog
          theme={theme}
          dismissable
          visible={visible}
          onDismiss={hideDialog}
        >
          <Dialog.Title>Profile</Dialog.Title>
          <Dialog.Content>
            <Text theme={theme} variant='bodyMedium'>
              Your Profile Here
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={handleAddExerciseData}>Add Random Exercise</Button>
            <Button onPress={handleDeleteAllExercises}>
              Delete All Exercises
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
};

export default ProfileDialog;
function dispatch(arg0: {
  payload: CompletedWorkout;
  type: 'exercise/storeCompletedWorkout';
}) {
  throw new Error('Function not implemented.');
}
