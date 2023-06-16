import React from 'react';
import { Exercise } from '../../../../../app.interface';
import { useAppTheme } from '../../../../../utils/use-app-theme';
import { List, Text } from 'react-native-paper';

import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ExercisePane = ({ item }: { item: Exercise }) => {
  const theme = useAppTheme();
  return (
    <View>
      <List.Item
        title={<Text variant='titleMedium'>{item.name}</Text>}
        description={
          <Text>
            {item.primaryMuscles[0].charAt(0).toUpperCase() +
              item.primaryMuscles[0].slice(1)}
          </Text>
        }
        right={props => <List.Icon {...props} icon='chevron-right' />}
      />
    </View>
  );
};

export default ExercisePane;
