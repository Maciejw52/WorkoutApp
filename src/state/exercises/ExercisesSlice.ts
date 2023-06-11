import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CompletedWorkout } from '../../app.interface';

interface ExerciseState {
  completedWorkouts: CompletedWorkout[];
  loading: boolean;
  error: string | null;
}

const initialState: ExerciseState = {
  completedWorkouts: [],
  loading: false,
  error: null,
};

const exerciseSlice = createSlice({
  name: 'exercise',
  initialState,
  reducers: {
    storeCompletedWorkout: (state, action: PayloadAction<CompletedWorkout>) => {
      console.log(action.payload);
      state.completedWorkouts = state.completedWorkouts.concat(action.payload);
    },
    deleteAllExercises: state => {
      state.completedWorkouts = [];
    },
    deleteExercise: (state, action: PayloadAction<string>) => {
      const index = state.completedWorkouts.findIndex(
        workout => workout.id === action.payload,
      );
      if (index !== -1) {
        state.completedWorkouts.splice(index, 1);
      }
    },
  },
});

export const { storeCompletedWorkout, deleteAllExercises, deleteExercise } =
  exerciseSlice.actions;
export default exerciseSlice.reducer;
