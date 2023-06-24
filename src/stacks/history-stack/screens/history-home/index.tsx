import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import renderWorkoutItem from './components/render-workout-item';
import { RootState } from '../../../../redux-store/store';
import { useAppTheme } from '../../../../utils/use-app-theme';

const styles = {
  container: {
    display: 'flex' as const,
    flex: 1,
    // other styles
  },
};

export const HistoryScreen = () => {
  const completedWorkouts = useSelector(
    (state: RootState) => state.exercise.completedWorkouts,
  );

  const workoutsListLength = completedWorkouts.length;
  const theme = useAppTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {workoutsListLength !== 0 ? (
        <FlatList
          contentContainerStyle={{
            paddingBottom: theme.spacing.md,
            paddingHorizontal: theme.spacing.md,
          }}
          data={completedWorkouts}
          renderItem={renderWorkoutItem}
          keyExtractor={item => item.id}
          getItemLayout={(data, index) => ({
            length: 100,
            offset: 100 * index,
            index,
          })}
        />
      ) : (
        <Text>You have no Workouts</Text>
      )}
    </SafeAreaView>
  );
};

export default HistoryScreen;
