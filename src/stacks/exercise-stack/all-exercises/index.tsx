import React, { useState, useEffect, useMemo } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Searchbar } from 'react-native-paper';

// Internal imports
import ListSeparator from './components/list-separator';
import renderItem from './components/render-item/render-item';

// Database imports
import exercisesData from '../../../database/exercises.json';

// Interface imports
import { useAppTheme } from '../../../utils/use-app-theme';

const AllExerciseScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [exerciseData, setExerciseData] = useState({
    exercises: exercisesData.exercises,
    filteredExercises: exercisesData.exercises,
  });
  const theme = useAppTheme();

  const handleSearch = (text: string) => {
    setSearchText(text);
    const filtered = exerciseData.exercises.filter(exercise =>
      exercise.name.toLowerCase().includes(text.toLowerCase()),
    );
    setExerciseData(prevState => ({
      ...prevState,
      filteredExercises: filtered,
    }));
  };

  useEffect(() => {
    setExerciseData(prevState => ({
      ...prevState,
      exercises: exercisesData.exercises,
      filteredExercises: exercisesData.exercises,
    }));
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingHorizontal: theme.spacing.sm,
      }}
    >
      <Searchbar
        style={{ marginVertical: theme.spacing.sm }}
        theme={theme}
        placeholder='Search Exercise'
        onChangeText={handleSearch}
        value={searchText}
      ></Searchbar>
      <FlashList
        showsVerticalScrollIndicator={false}
        data={exerciseData.filteredExercises}
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

export default AllExerciseScreen;
