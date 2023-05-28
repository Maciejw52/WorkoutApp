interface ExerciseSet {
  reps: number;
  weight_kilo: number;
  weight_pounds: number;
}

interface Exercise {
  name: string;
  sets: ExerciseSet[];
  time: number;
}

interface CompletedWorkout {
  date: string;
  duration: string;
  exercises: Exercise[];
}
