import { StyleSheet, Text, SafeAreaView, View, ScrollView } from 'react-native';
import React from 'react';
import { RootState } from '../../state/store';
import { useSelector } from 'react-redux';

export const HistoryScreen = () => {
  const completedWorkouts = useSelector((state: RootState) => state);

  console.log(completedWorkouts.exercise.completedWorkouts);

  if (completedWorkouts.exercise.completedWorkouts.length === 0) {
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
          <Text>You have no Workouts</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ScrollView>
        {completedWorkouts.exercise.completedWorkouts.map(
          (singleWorkout, index) => {
            console.log(singleWorkout);
            return (
              <View key={index}>
                <View>
                  <Text>Hello</Text>
                </View>
              </View>
            );
          },
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HistoryScreen;
