import { StyleSheet } from 'react-native';
import React from 'react';
import { Exercise } from '../../../../app.interface';

import Pane from '../pane';

const renderItem = ({ item }: { item: Exercise }) => {
  return <Pane title={item.name} icon={'chevron-small-right'} />;
};

export default renderItem;

const styles = StyleSheet.create({});
