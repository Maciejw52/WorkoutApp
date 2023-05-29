import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useAppTheme } from '../../../utils/use-app-theme';

const Navbar = ({ route }: { route: any }) => {
  const theme = useAppTheme();
  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  return (
    <Appbar.Header mode='small' theme={theme}>
      {!route.params?.initialRoute && (
        <Appbar.BackAction onPress={handleBackButtonPress} />
      )}
      <Appbar.Content title={route.name} />
      <Appbar.Action icon='account-circle' onPress={() => null} />
      <Appbar.Action icon='dots-vertical' onPress={() => null} />
    </Appbar.Header>
  );
};

export default Navbar;

const styles = StyleSheet.create({});
