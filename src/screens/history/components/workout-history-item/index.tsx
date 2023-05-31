import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CompletedWorkout } from '../../../../app.interface';
import { useAppTheme } from '../../../../utils/use-app-theme';
import { Card, Text } from 'react-native-paper';

import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const WorkoutHistoryItem = ({ item }: { item: CompletedWorkout }) => {
  const theme = useAppTheme();

  return (
    <Card
      theme={theme}
      style={{
        marginBottom: theme.spacing.md,
      }}
    >
      <Card.Title
        theme={theme}
        title={<Text variant='titleMedium'>{item.workoutName}</Text>}
        subtitle={
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              columnGap: theme.spacing.lg,
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                columnGap: theme.spacing.xs,
              }}
            >
              <Icon
                name={'calendar-range'}
                size={16}
                color={theme.colors.onSecondaryContainer}
              />
              <Text variant='bodySmall'>{item.date}</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                columnGap: theme.spacing.xs,
              }}
            >
              <Icon
                name={'timer'}
                size={16}
                color={theme.colors.onSecondaryContainer}
              />
              <Text variant='bodySmall'>{item.duration}</Text>
            </View>
          </View>
        }
        rightStyle={{ right: theme.spacing.md, bottom: theme.spacing.sm }}
        right={props => (
          <Icon
            name={'dots-vertical'}
            size={22}
            color={theme.colors.onSecondaryContainer}
          />
        )}
      />
      <Card.Content>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
        >
          <View style={{ marginBottom: theme.spacing.xxs }}>
            <Text variant='titleSmall' style={{}}>
              Exercise
            </Text>
          </View>
          <Text variant='titleSmall'>Total lifted</Text>
        </View>
        {item.exercises.map((exercise, i) => {
          return (
            <View
              key={uuidv4()}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}
            >
              <View>
                <Text>
                  {exercise.sets.length} {'×'} {exercise.name}
                </Text>
              </View>
              <Text>{exercise.total.toLocaleString()} kg</Text>
            </View>
          );
        })}
      </Card.Content>
    </Card>
  );
};

export default WorkoutHistoryItem;
