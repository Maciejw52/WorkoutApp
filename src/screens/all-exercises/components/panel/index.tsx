import { StyleProp, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import { useTheme } from 'react-native-paper';

const styles = {
  default: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden' as const,
  },
};

const Panel = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();

  const PanelContainerStyle: StyleProp<ViewStyle> = [
    styles.default,
    { borderColor: theme.colors.backdrop },
  ];

  return <View style={PanelContainerStyle}>{children}</View>;
};

export default Panel;
