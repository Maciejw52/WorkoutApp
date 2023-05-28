import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ROUTES } from '../../../constants';
import { NavBarIconProps } from '../../../app.interface';

export const TabIconRender = ({ route, color, size }: NavBarIconProps) => {
  let iconName = 'home';
  if (route.name === ROUTES.HISTORYSTACK) {
    iconName = 'chart-areaspline';
  } else if (route.name === ROUTES.EXERCISESSTACK) {
    iconName = 'dumbbell';
  } else if (route.name === ROUTES.WORKOUTSTACK) {
    iconName = 'arm-flex';
  }
  return <Icon name={iconName} size={size} color={color} />;
};

export default TabIconRender;

const styles = StyleSheet.create({});
