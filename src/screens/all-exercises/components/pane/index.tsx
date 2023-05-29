import { StyleProp, View, ViewStyle } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { Text } from 'react-native-paper';
import { useAppTheme } from '../../../../utils/use-app-theme';

const styles = {
  default: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingVertical: 16,
    display: 'flex' as const,
    flexDirection: 'row' as const,
    justifyContent: 'space-between' as const,
  },
};

const Panel = ({ title, icon, ...props }: { title: string; icon: string }) => {
  const theme = useAppTheme();

  const PanelContainerStyle: StyleProp<ViewStyle> = [
    styles.default,
    { backgroundColor: theme.colors.secondaryContainer },
  ];

  const PaneTextStyle = [{ color: theme.colors.onSecondaryContainer }];

  return (
    <View style={PanelContainerStyle} {...props}>
      <Text variant='titleMedium' style={PaneTextStyle}>
        {title}
      </Text>
      <View>
        <Icon name={icon} size={24} color={theme.colors.onSecondaryContainer} />
      </View>
    </View>
  );
};

export default Panel;
