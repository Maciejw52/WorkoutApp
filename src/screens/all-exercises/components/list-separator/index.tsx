import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useAppTheme } from '../../../../utils/use-app-theme';

const ListSeparator = () => {
  const theme = useAppTheme();

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
