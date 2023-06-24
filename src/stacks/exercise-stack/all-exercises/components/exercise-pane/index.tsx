import React from 'react';
import { Exercise } from '../../../../../app.interface';
import { useAppTheme } from '../../../../../utils/use-app-theme';
import { List, Text } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../../../constants/routes';

interface ExercisePaneProps {
  item: Exercise;
}

const ExercisePane: React.FC<ExercisePaneProps> = ({ item }) => {
  const theme = useAppTheme();
  const navigation = useNavigation();

  const handleExercisePress = () => {
    navigation.navigate('Exercises Description');
  };

  return (
    <TouchableOpacity onPress={handleExercisePress}>
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
    </TouchableOpacity>
  );
};

export default ExercisePane;
