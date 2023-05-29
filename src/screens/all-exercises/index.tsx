import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { TextInput } from 'react-native-paper';
// Internal imports
import renderItem from './components/render-item/render-item';
import ListSeparator from './components/list-separator';
import Panel from './components/panel';

// Database imports
import exercisesData from '../../database/exercises.json';

// Interface imports
import { useAppTheme } from '../../utils/use-app-theme';
import { Exercise } from '../../app.interface';
import ItemWrapper from './components/wrapper/item-wrapper';

export const AllExerciseScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [exercises, setExercises] = useState<Exercise[]>(
    exercisesData.exercises.map(({ instructions, ...rest }) => rest),
  );
  const [filteredExercises, setFilteredExercises] = useState<Exercise[]>([]);
  const theme = useAppTheme();

  useEffect(() => {
    setExercises(exercisesData.exercises);
    setFilteredExercises(exercisesData.exercises);
  }, []);

  const handleSearch = (text: string) => {
    setSearchText(text);
    const filtered = exercises.filter(exercise =>
      exercise.name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredExercises(filtered);
  };

  return (
    <SafeAreaView style={styles.exercises_list}>
      {/* Render the list of filtered exercises */}
      <Panel>
        <FlashList
          showsVerticalScrollIndicator={false}
          data={filteredExercises}
          renderItem={renderItem}
          estimatedItemSize={49.1}
          keyExtractor={item => item.name}
          ListEmptyComponent={
            <View>
              <Text>No items</Text>
            </View>
          }
          ItemSeparatorComponent={() => <ListSeparator />}
        />
      </Panel>

      {/* Render the search bar */}
      <ItemWrapper>
        <TextInput
          theme={theme}
          style={{
            backgroundColor: theme.colors.secondary,
            color: theme.colors.onSecondary,
          }}
          placeholderTextColor={theme.colors.onSecondary}
          textColor={theme.colors.onSecondary}
          placeholder='Search Exercise'
          value={searchText}
          onChangeText={handleSearch}
        />
      </ItemWrapper>
    </SafeAreaView>
  );
};

export default AllExerciseScreen;

const styles = StyleSheet.create({
  exercises_list: {
    flex: 1,
  },
});
