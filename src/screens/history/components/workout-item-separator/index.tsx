import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useAppTheme } from '../../../../utils/use-app-theme';

const WorkoutItemSeparator = () => {
  const theme = useAppTheme();
  return <View style={{ height: theme.spacing.md }}></View>;
};

export default WorkoutItemSeparator;
