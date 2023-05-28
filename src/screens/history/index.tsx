import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import React from 'react';

export const HistoryScreen = () => {
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
        <Text>History Page</Text>
      </View>
    </SafeAreaView>
  );
};

export default HistoryScreen;
