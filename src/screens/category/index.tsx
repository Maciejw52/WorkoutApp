import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Text } from 'react-native-paper';
import React from 'react';

export const CategoryScreen = () => {
  return (
    <SafeAreaView
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View>
        <Text>Category Page</Text>
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
