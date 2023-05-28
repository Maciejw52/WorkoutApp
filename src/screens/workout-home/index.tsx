import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { storeCompletedWorkout } from '../../state/exercises/ExercisesSlice';

export const WorkoutHomeScreen = () => {
  const dispatch = useDispatch();

  const handleAddExerciseData = () => {
    const workoutData: CompletedWorkout = {
      date: new Date().toISOString(),
      duration: '1 hour',
      exercises: [
        {
          name: 'workout',
          sets: {
            reps: Math.random() * 10,
            weight_kilo: Math.random() * 10,
            weight_pounds: Math.random() * 10,
          },
          time: Math.random() * 10,
        },
      ],
    };

    dispatch(storeCompletedWorkout(workoutData));
  };

  return (
    <SafeAreaView
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View>
        <Text>Workout Home Page</Text>
        <Button onPress={handleAddExerciseData}>Add Exercise Data</Button>
      </View>
    </SafeAreaView>
  );
};

export default WorkoutHomeScreen;

const styles = StyleSheet.create({});
