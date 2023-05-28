import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import { useTheme } from 'react-native-paper';

const styles = {
  default: {
    margin: 8,
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden' as const,
  },
};

const ItemWrapper = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();

  const PanelContainerStyle: StyleProp<ViewStyle> = [
    styles.default,
    { borderColor: theme.colors.backdrop },
  ];

  return <View style={PanelContainerStyle}>{children}</View>;
};

export default ItemWrapper;
