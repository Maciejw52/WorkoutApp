import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ListItem } from '@react-native-material/core';
import { Exercise } from '../../../app.interface';

import Icon from 'react-native-vector-icons/Entypo';
import Panel from '../../../components/panel';

const renderItem = ({ item }: { item: Exercise }) => {
  return <Panel title={item.name} icon={'chevron-small-right'} />;
};

export default renderItem;

const styles = StyleSheet.create({});
