import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
      state.completedWorkouts.push(action.payload);
    },
  },
});

export const { storeCompletedWorkout } = exerciseSlice.actions;
export default exerciseSlice.reducer;
