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

const ProfileDialog = ({
  visible,
  hideDialog,
}: {
  visible: boolean;
  hideDialog: () => void;
}) => {
  const theme = useAppTheme();
  const currentdate = format(new Date(), 'dd MMM yyyy');
  const duration = generateRandomWorkoutTime();
  const dispatch = useDispatch();

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
              weight_kilo: (Math.floor(Math.random() * 56) + 52) * 2,
            },
            {
              reps: Math.floor(Math.random() * 5) + 6,
              weight_kilo: (Math.floor(Math.random() * 34) + 53) * 2,
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
