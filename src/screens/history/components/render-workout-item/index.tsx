import { StyleSheet } from 'react-native';
import React from 'react';
import WorkoutHistoryItem from '../workout-history-item';

const renderWorkoutItem = ({ item }: { item: CompletedWorkout }) => {
  return <WorkoutHistoryItem item={item} />;
};

export default renderWorkoutItem;

const styles = StyleSheet.create({});
