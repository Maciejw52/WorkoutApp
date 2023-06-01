import { StyleSheet } from 'react-native';
import React from 'react';
import WorkoutHistoryItem from '../workout-history-item';
import { CompletedWorkout } from '../../../../../app.interface';

// Need this or else FlashList gets angry for using the useTheme hook
const renderWorkoutItem = ({ item }: { item: CompletedWorkout }) => {
  return <WorkoutHistoryItem item={item} />;
};

export default renderWorkoutItem;

const styles = StyleSheet.create({});
