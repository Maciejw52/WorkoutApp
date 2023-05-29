import { StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

// Internal imports
import {
  deleteAllExercises,
  storeCompletedWorkout,
} from '../../state/exercises/ExercisesSlice';
import { generateRandomWorkoutTime } from '../../utils/generators';

// Interface imports
import { CompletedWorkout } from '../../app.interface';
import { useAppTheme } from '../../utils/use-app-theme';
import { ScrollView } from 'react-native-gesture-handler';

export const WorkoutHomeScreen = () => {
  const theme = useAppTheme();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
            title='Card Title'
            subtitle='Card Subtitle'
            left={props => <Avatar.Icon {...props} icon='folder' />}
          />
          <Card.Content>
            <Text variant='titleLarge'>Card title</Text>
            <Text variant='bodyMedium'>Card content</Text>
          </Card.Content>
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        <Card>
          <Card.Title
            title='Card Title'
            subtitle='Card Subtitle'
            left={props => <Avatar.Icon {...props} icon='folder' />}
          />
          <Card.Content>
            <Text variant='titleLarge'>Card title</Text>
            <Text variant='bodyMedium'>Card content</Text>
          </Card.Content>
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        <Card>
          <Card.Title
            title='Card Title'
            subtitle='Card Subtitle'
            left={props => <Avatar.Icon {...props} icon='folder' />}
          />
          <Card.Content>
            <Text variant='titleLarge'>Card title</Text>
            <Text variant='bodyMedium'>Card content</Text>
          </Card.Content>
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        <Card>
          <Card.Title
            title='Card Title'
            subtitle='Card Subtitle'
            left={props => <Avatar.Icon {...props} icon='folder' />}
          />
          <Card.Content>
            <Text variant='titleLarge'>Card title</Text>
            <Text variant='bodyMedium'>Card content</Text>
          </Card.Content>
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      </SafeAreaView>
    </ScrollView>
  );
};

export default WorkoutHomeScreen;

const styles = StyleSheet.create({});
