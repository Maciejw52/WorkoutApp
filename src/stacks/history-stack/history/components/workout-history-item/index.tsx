import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CompletedWorkout } from '../../../../../app.interface';
import { useAppTheme } from '../../../../../utils/use-app-theme';
import { Card, Text } from 'react-native-paper';

import { FlatList, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MemoizedBadgeWithIcon } from '../icon-text-badge/badge';

const styles = {
  standard: {
    display: 'flex' as const,
    flexDirection: 'row' as const,
    justifyContent: 'space-between' as const,
  },
};

export const WorkoutHistoryItem = ({ item }: { item: CompletedWorkout }) => {
  const theme = useAppTheme();

  return (
    <Card theme={theme} style={{ marginBottom: theme.spacing.md }}>
      <Card.Title
        theme={theme}
        title={<Text variant='titleMedium'>{item.name}</Text>}
        subtitle={
          <View style={[styles.standard, { columnGap: theme.spacing.lg }]}>
            <MemoizedBadgeWithIcon icon={'calendar-range'} text={item.date} />
            <MemoizedBadgeWithIcon icon={'timer'} text={item.duration} />
          </View>
        }
        rightStyle={{ right: theme.spacing.md, bottom: theme.spacing.sm }}
        right={() => (
          <Icon
            name={'dots-vertical'}
            size={22}
            color={theme.colors.onSecondaryContainer}
          />
        )}
      />
      <Card.Content>
        <View style={[styles.standard]}>
          <View style={{ marginBottom: theme.spacing.xxs }}>
            <Text variant='titleSmall'>Exercise</Text>
          </View>
          <Text variant='titleSmall'>Total lifted</Text>
        </View>
        <FlatList
          data={item.exercises}
          keyExtractor={exercise => exercise.id}
          renderItem={({ item: exercise }) => (
            <View style={styles.standard}>
              <View>
                <Text>
                  {exercise.sets.length} {'×'} {exercise.name}
                </Text>
              </View>
              <Text>{exercise.total.toLocaleString()} kg</Text>
            </View>
          )}
        />
      </Card.Content>
    </Card>
  );
};

export default WorkoutHistoryItem;
