import { StyleSheet } from 'react-native';
import React from 'react';
import { Exercise } from '../../../../app.interface';
import WorkoutHistoryComponent from '../workout-history-component';

const renderWorkoutItem = ({ item }: { item: CompletedWorkout }) => {
  return <WorkoutHistoryComponent item={item} />;
};

export default renderWorkoutItem;

const styles = StyleSheet.create({});
