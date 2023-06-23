import { Text, View } from 'react-native';
import React from 'react';
import { useAppTheme } from '../../../utils/use-app-theme';
import { SafeAreaView } from 'react-native-safe-area-context';

const ExerciseDescriptionScreen = ({}) => {
  const theme = useAppTheme();
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.colors.background,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>ExerciseDescriptionScreen</Text>
    </SafeAreaView>
  );
};

export default ExerciseDescriptionScreen;
