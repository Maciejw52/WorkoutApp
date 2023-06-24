import React from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { ROUTES, RootStackParamList } from '../constants/routes';
import Navbar from './components/navbar/Navbar';
import HistoryScreen from '../stacks/history-stack/history';

type HistoryStackScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'HistoryStack'>;
  route: RouteProp<RootStackParamList, 'HistoryStack'>;
};

const HistoryStack = createStackNavigator<RootStackParamList>();

const HistoryStackScreen: React.FC<HistoryStackScreenProps> = ({
  navigation,
}) => {
  return (
    <HistoryStack.Navigator
      screenOptions={{
        header: Navbar,
      }}
    >
      <HistoryStack.Screen
        name={'History'}
        component={HistoryScreen}
        initialParams={{ initialRoute: true }}
      />
    </HistoryStack.Navigator>
  );
};

export default HistoryStackScreen;
