import React, { useState, useEffect } from 'react';
import { TextInput, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import exercisesData from '../../database/exercises.json';
import filterData from '../../database/categories.json';
import renderItem from './components/render-item';
import { COLORS } from '../../constants';
import { FlashList } from '@shopify/flash-list';
import { Exercise } from '../../app.interface';
import ListSeparator from './components/list-separator/list-separator';

const ExerciseScreen: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [exercises, setExercises] = useState<Exercise[]>(
    exercisesData.exercises.map(({ instructions, ...rest }) => rest),
  );
  const [filteredExercises, setFilteredExercises] = useState<Exercise[]>([]);

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
      {/* Render the search bar */}

      <TextInput
        placeholder='Search exercises'
        value={searchText}
        onChangeText={handleSearch}
      />

      {/* Render the list of filtered exercises */}
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
    </SafeAreaView>
  );
};

export default ExerciseScreen;

const styles = StyleSheet.create({
  exercises_list: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
  },
});
