import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ListSeparator = () => {
  return <View style={styles.separator}></View>;
};

export default ListSeparator;

const styles = StyleSheet.create({
  separator: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
  },
});
