import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { RootState } from '../../state/store';
import { useSelector } from 'react-redux';
import { FlashList } from '@shopify/flash-list';
import renderWorkoutItem from './components/render-workout-item';
import WorkoutItemSeparator from './components/workout-item-separator';
import { useAppTheme } from '../../utils/use-app-theme';

export const HistoryScreen = () => {
  const completedWorkouts = useSelector(
    (state: RootState) => state.exercise.completedWorkouts,
  );
  const workoutsListLength = completedWorkouts.length;
  const theme = useAppTheme();
  return (
    <SafeAreaView
      style={{
        display: 'flex',
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingHorizontal: 12,
      }}
    >
      {workoutsListLength !== 0 ? (
        <FlashList
          data={completedWorkouts}
          renderItem={renderWorkoutItem}
          estimatedItemSize={100}
          ItemSeparatorComponent={WorkoutItemSeparator}
        ></FlashList>
      ) : (
        <Text>You have no Workouts</Text>
      )}
    </SafeAreaView>
  );
};

export default HistoryScreen;
