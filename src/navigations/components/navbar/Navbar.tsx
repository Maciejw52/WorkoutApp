import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Appbar, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Navbar = ({ route }: { route: any }) => {
  const theme = useTheme();
  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  return (
    <Appbar.Header mode='small' theme={theme}>
      {navigation.canGoBack() && (
        <Appbar.BackAction onPress={handleBackButtonPress} />
      )}
      <Appbar.Content title={route.name} />
      <Appbar.Action icon='dots-vertical' onPress={() => null} />
    </Appbar.Header>
  );
};

export default Navbar;

const styles = StyleSheet.create({});
