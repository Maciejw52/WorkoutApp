import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import { useAppTheme } from '../../../../utils/use-app-theme';

const styles = {
  default: {
    margin: 8,
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden' as const,
  },
};

const ItemWrapper = ({ children }: { children: ReactNode }) => {
  const theme = useAppTheme();

  const PanelContainerStyle: StyleProp<ViewStyle> = [
    styles.default,
    { borderColor: theme.colors.backdrop },
  ];

  return <View style={PanelContainerStyle}>{children}</View>;
};

export default ItemWrapper;
