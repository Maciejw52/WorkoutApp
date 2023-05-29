import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CompletedWorkout } from '../../../../app.interface';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppTheme } from '../../../../utils/use-app-theme';

export const WorkoutHistoryComponent = ({
  item,
}: {
  item: CompletedWorkout;
}) => {
  const theme = useAppTheme();
  const styles = {
    container: {
      borderColor: theme.colors.outline,
      borderWidth: 1,
      borderRadius: 12,
      padding: 12,
    },
    workoutName: {
      color: theme.colors.onBackground,
      fontWeight: '600' as const,
    },
    date: {},
    duration: {},
    exercise: {},
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.workoutName}>{item.workoutName}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.duration}>{item.duration}</Text>
      {item.exercises.map((exercise, i) => {
        return (
          <Text key={uuidv4()} style={styles.exercise}>
            {exercise.sets.length} x {exercise.name}
          </Text>
        );
      })}
    </SafeAreaView>
  );
};

export default WorkoutHistoryComponent;
