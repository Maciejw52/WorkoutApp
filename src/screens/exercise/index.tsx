import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';

interface Exercise {
  name: string;
  level: string;
  mechanic: string;
  category: string;
  force: string;
  primaryMuscles: string[];
}

const ExerciseScreen: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [filteredExercises, setFilteredExercises] = useState<Exercise[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<{
    levels: string[];
    mechanics: string[];
    categories: string[];
    forces: string[];
    primaryMuscles: string[];
  }>({
    levels: [],
    mechanics: [],
    categories: [],
    forces: [],
    primaryMuscles: [],
  });

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    try {
      const response = await axios.get('../../database/exercises.json'); // Replace with the actual path to your exercises.json file
      const data = response.data.exercises;
      setExercises(data);
      setFilteredExercises(data);
    } catch (error) {
      console.error(error);
    }
  };

  const applyFilters = () => {
    const filtered = exercises.filter(exercise => {
      const { level, mechanic, category, force, primaryMuscles } = exercise;
      return (
        (selectedFilters.levels.length === 0 ||
          selectedFilters.levels.includes(level)) &&
        (selectedFilters.mechanics.length === 0 ||
          selectedFilters.mechanics.includes(mechanic)) &&
        (selectedFilters.categories.length === 0 ||
          selectedFilters.categories.includes(category)) &&
        (selectedFilters.forces.length === 0 ||
          selectedFilters.forces.includes(force)) &&
        (selectedFilters.primaryMuscles.length === 0 ||
          primaryMuscles.some(muscle =>
            selectedFilters.primaryMuscles.includes(muscle),
          ))
      );
    });
    setFilteredExercises(filtered);
  };

  const clearFilters = () => {
    setSelectedFilters({
      levels: [],
      mechanics: [],
      categories: [],
      forces: [],
      primaryMuscles: [],
    });
    setFilteredExercises(exercises);
  };

  const renderFilterButton = (
    filterType: keyof typeof selectedFilters,
    filterValue: string,
  ) => {
    const isSelected = selectedFilters[filterType].includes(filterValue);

    const toggleFilter = () => {
      let updatedFilters = { ...selectedFilters };
      if (isSelected) {
        updatedFilters[filterType] = updatedFilters[filterType].filter(
          value => value !== filterValue,
        );
      } else {
        updatedFilters[filterType] = [
          ...updatedFilters[filterType],
          filterValue,
        ];
      }
      setSelectedFilters(updatedFilters);
    };

    return (
      <TouchableOpacity
        style={{
          backgroundColor: isSelected ? '#2ecc71' : '#e74c3c',
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 5,
          marginRight: 10,
        }}
        onPress={toggleFilter}
      >
        <Text style={{ color: '#ffffff' }}>{filterValue}</Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }: { item: Exercise }) => (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
      <Text>Level: {item.level}</Text>
      <Text>Mechanic: {item.mechanic}</Text>
      <Text>Category: {item.category}</Text>
      <Text>Force: {item.force}</Text>
      <Text>Primary Muscles: {item.primaryMuscles.join(', ')}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Text style={{ marginRight: 10, fontSize: 16 }}>Filters:</Text>
        <View style={{ flexDirection: 'row' }}>
          {selectedFilters.levels.map(level =>
            renderFilterButton('levels', level),
          )}
          {selectedFilters.mechanics.map(mechanic =>
            renderFilterButton('mechanics', mechanic),
          )}
          {selectedFilters.categories.map(category =>
            renderFilterButton('categories', category),
          )}
          {selectedFilters.forces.map(force =>
            renderFilterButton('forces', force),
          )}
          {selectedFilters.primaryMuscles.map(muscle =>
            renderFilterButton('primaryMuscles', muscle),
          )}
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#3498db',
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 5,
          marginBottom: 10,
        }}
        onPress={applyFilters}
      >
        <Text style={{ color: '#ffffff' }}>Apply Filters</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#95a5a6',
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 5,
          marginBottom: 10,
        }}
        onPress={clearFilters}
      >
        <Text style={{ color: '#ffffff' }}>Clear Filters</Text>
      </TouchableOpacity>
      <FlatList
        data={filteredExercises}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default ExerciseScreen;
