import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList, ROUTES } from '../constants/routes';
import Navbar from './components/navbar/Navbar';
import WorkoutHomeScreen from '../stacks/home-stack/screens/home-screen/home-screen';

type WorkoutStackScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
  route: RouteProp<RootStackParamList, keyof RootStackParamList>;
};

const HomeStack = createStackNavigator<RootStackParamList>();

const HomeStackScreen: React.FC<WorkoutStackScreenProps> = ({ navigation }) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        header: Navbar,
      }}
    >
      <HomeStack.Screen
        name={'Workout'}
        component={WorkoutHomeScreen}
        initialParams={{ initialRoute: true }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
