import { StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

import { useAppTheme } from '../../../../utils/use-app-theme';
import { ScrollView } from 'react-native-gesture-handler';

export const WorkoutHomeScreen = () => {
  const theme = useAppTheme();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        display: 'flex',
        flex: 1,
        backgroundColor: theme.colors.background,
        minHeight: '100%',
      }}
      contentContainerStyle={{
        justifyContent: 'center',
      }}
    >
      <SafeAreaView
        style={{
          display: 'flex',
          flex: 1,
          backgroundColor: theme.colors.background,
          paddingHorizontal: theme.spacing.md,
          paddingBottom: theme.spacing.md,
          rowGap: 10,
        }}
      >
        <Card theme={theme}>
          <Card.Title
            theme={theme}
            title={<Text variant='titleLarge'>Start Workout</Text>}
            left={props => <Avatar.Icon {...props} icon='dumbbell' />}
          />
        </Card>
        <Card>
          <Card.Title
            theme={theme}
            title={<Text variant='titleLarge'>Your Last Workout</Text>}
            left={props => <Avatar.Icon {...props} icon='school' />}
          />
        </Card>
      </SafeAreaView>
    </ScrollView>
  );
};

export default WorkoutHomeScreen;

const styles = StyleSheet.create({});
