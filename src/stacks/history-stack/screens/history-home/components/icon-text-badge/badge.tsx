import { StyleSheet, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native-paper';
import { useAppTheme } from '../../../../../../utils/use-app-theme';

export const BadgeWithIcon = ({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) => {
  const theme = useAppTheme();

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        columnGap: theme.spacing.xs,
      }}
    >
      <Icon name={icon} size={16} color={theme.colors.onSecondaryContainer} />
      <Text variant='bodySmall'>{text}</Text>
    </View>
  );
};

export const MemoizedBadgeWithIcon = React.memo(BadgeWithIcon);

export default BadgeWithIcon;
