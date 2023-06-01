import { StyleSheet } from 'react-native';
import React from 'react';
import ExercisePane from '../exercise-pane';
import { Exercise } from '../../../../../app.interface';

// Need this or else FlashList gets angry for using the useTheme hook
const renderExercisePane = ({ item }: { item: Exercise }) => {
  return <ExercisePane item={item} />;
};

export default renderExercisePane;

const styles = StyleSheet.create({});
