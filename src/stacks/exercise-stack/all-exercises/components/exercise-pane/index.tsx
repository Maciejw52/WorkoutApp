import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CompletedWorkout, Exercise } from '../../../../../app.interface';
import { useAppTheme } from '../../../../../utils/use-app-theme';
import { Card, Text } from 'react-native-paper';

import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ExercisePane = ({ item }: { item: Exercise }) => {
  const theme = useAppTheme();
  return (
    <Card theme={theme} mode='outlined'>
      <Card.Title
        theme={theme}
        title={<Text variant='titleMedium'>{item.name}</Text>}
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
                name={'shape'}
                size={16}
                color={theme.colors.onQuaternaryContainer}
              />
              <Text variant='bodySmall'>{item.category}</Text>
            </View>
          </View>
        }
        rightStyle={{ right: theme.spacing.md, bottom: theme.spacing.sm }}
        right={props => (
          <Icon
            name={'chevron-right'}
            size={22}
            color={theme.colors.onSecondaryContainer}
          />
        )}
      />
    </Card>
  );
};

export default ExercisePane;
