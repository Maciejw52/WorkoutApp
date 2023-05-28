export interface Exercise {
  name: string;
  level: string;
  mechanic?: string | null;
  category: string;
  force: string | null;
  primaryMuscles: string[];
}
