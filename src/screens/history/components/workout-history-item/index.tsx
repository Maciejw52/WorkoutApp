import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CompletedWorkout } from '../../../../app.interface';
import { useAppTheme } from '../../../../utils/use-app-theme';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { deleteExercise } from '../../../../state/exercises/ExercisesSlice';
import { useDispatch } from 'react-redux';

export const WorkoutHistoryItem = ({ item }: { item: CompletedWorkout }) => {
  const theme = {
    ...useAppTheme(),
    colors: {
      error: 'rgb(255,255,255)',
    },
  };
  const dispatch = useDispatch();

  return (
    <Card
      theme={theme}
      style={{
        marginBottom: theme.spacing.md,
        backgroundColor: theme.colors.error,
      }}
    >
      <Card.Title
        theme={theme}
        title={item.workoutName}
        subtitle={item.date}
        rightStyle={{ right: theme.spacing.md }}
        right={props => (
          <Avatar.Icon
            theme={theme}
            {...props}
            style={{ paddingLeft: -theme.spacing.md }}
            icon='dots-vertical'
          />
        )}
      />
      <Card.Content>
        <Text variant='bodyMedium'>{item.duration}</Text>
        {item.exercises.map((exercise, i) => {
          return (
            <Text key={uuidv4()}>
              {exercise.sets.length} x {exercise.name}
            </Text>
          );
        })}
      </Card.Content>
      <Card.Actions theme={theme}>
        <Button theme={theme} onPress={() => dispatch(deleteExercise(item.id))}>
          Delete
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default WorkoutHistoryItem;
