import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import React from 'react';

export const WorkoutHomeScreen = () => {
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
      </View>
    </SafeAreaView>
  );
};

export default WorkoutHomeScreen;

const styles = StyleSheet.create({});
