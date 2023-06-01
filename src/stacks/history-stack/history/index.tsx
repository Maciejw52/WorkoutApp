import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { RootState } from '../../../state/store';
import { useSelector } from 'react-redux';
import { FlashList } from '@shopify/flash-list';
import renderWorkoutItem from './components/render-workout-item';
import { useAppTheme } from '../../../utils/use-app-theme';

export const HistoryScreen = () => {
  const completedWorkouts = useSelector(
    (state: RootState) => state.exercise.completedWorkouts,
  );

  const [workouts, setWorkouts] = useState(completedWorkouts);

  useEffect(() => {
    setWorkouts(completedWorkouts);
  }, [completedWorkouts]);

  const workoutsListLength = completedWorkouts.length;
  const theme = useAppTheme();
  return (
    <SafeAreaView
      style={{
        display: 'flex',
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      {workoutsListLength !== 0 ? (
        <FlashList
          contentContainerStyle={{
            paddingBottom: theme.spacing.md,
            paddingHorizontal: theme.spacing.md,
          }}
          data={workouts}
          renderItem={renderWorkoutItem}
          estimatedItemSize={100}
        ></FlashList>
      ) : (
        <Text>You have no Workouts</Text>
      )}
    </SafeAreaView>
  );
};

export default HistoryScreen;
