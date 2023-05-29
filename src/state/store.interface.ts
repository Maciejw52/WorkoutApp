interface ExerciseSet {
  reps: number;
  weight_kilo: number;
  weight_pounds: number;
}

interface Exercise {
  name: string;
  sets: ExerciseSet[];
}

interface CompletedWorkout {
  id: string;
  workoutName: string;
  date: string;
  duration: string;
  exercises: Exercise[];
}
