import { StyleProp, Text, View, ViewStyle } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { COLORS } from '../constants';

const styles = {
  default: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingVertical: 16,
    display: 'flex' as const,
    flexDirection: 'row' as const,
    justifyContent: 'space-between' as const,
  },
  primary: {
    backgroundColor: COLORS.white,
  },
  secondary: {
    backgroundColor: COLORS.primary,
  },
};

const Panel = ({
  title,
  icon,
  variant = 'primary',
}: {
  title: string;
  icon: string;
  variant?: 'primary' | 'secondary';
}) => {
  const PanelContainerStyle: StyleProp<ViewStyle> = [
    styles.default,
    variant === 'primary' && styles.primary,
    variant === 'secondary' && styles.secondary,
  ];

  return (
    <View style={PanelContainerStyle}>
      <View>
        <Text>{title}</Text>
      </View>
      <View>
        <Icon name={icon} size={24} color='#000' />
      </View>
    </View>
  );
};

export default Panel;
