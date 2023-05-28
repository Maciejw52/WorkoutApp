import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from 'react-native-paper';

const ListSeparator = () => {
  const theme = useTheme();

  const Separator = [
    {
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.backdrop,
    },
  ];

  return <View style={Separator}></View>;
};

export default ListSeparator;

const styles = StyleSheet.create({});
