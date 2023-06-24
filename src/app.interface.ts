import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs';
import { BottomTabDescriptorMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import { EdgeInsets } from 'react-native-safe-area-context';

export interface Exercise {
  name: string;
  level: string;
  mechanic?: string | null;
  category: string;
  force: string | null;
  primaryMuscles: string[];
}

export interface NavBarIconProps {
  route: any;
  color: string;
  size: number;
}

export interface TabNavigatorProps {
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  insets: EdgeInsets;
}

export interface RouteProps {
  key: string;
  name: string;
  params: any;
}

// Exercise Data
export interface ExerciseSet {
  reps: number;
  weight_kilo: number;
}

export interface ExerciseHistory {
  id: string;
  name: string;
  sets: ExerciseSet[];
  total: number;
}

export interface CompletedWorkout {
  id: string;
  name: string;
  date: string;
  duration: string;
  exercises: ExerciseHistory[];
}

// Navigation

type ExerciseRootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Feed: undefined;
};
