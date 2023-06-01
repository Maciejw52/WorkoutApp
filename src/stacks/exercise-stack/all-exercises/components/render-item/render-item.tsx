import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Exercise } from '../../../../../app.interface';
import { useAppTheme } from '../../../../../utils/use-app-theme';
import { Card, MD3LightTheme, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const RenderItem = ({ item }: { item: Exercise }) => {
  const theme = {
    ...MD3LightTheme,
    custom: 'property',

    colors: {
      primary: 'rgb(0, 99, 154)',
      onPrimary: 'rgb(255, 255, 255)',
      primaryContainer: 'rgb(206, 229, 255)',
      onPrimaryContainer: 'rgb(0, 29, 50)',
      secondary: 'rgb(0, 104, 116)',
      onSecondary: 'rgb(255, 255, 255)',
      secondaryContainer: 'rgb(151, 240, 255)',
      onSecondaryContainer: 'rgb(0, 31, 36)',
      tertiary: 'rgb(56, 107, 1)',
      onTertiary: 'rgb(255, 255, 255)',
      tertiaryContainer: 'rgb(183, 244, 129)',
      onTertiaryContainer: 'rgb(13, 32, 0)',
      error: 'rgb(186, 26, 26)',
      onError: 'rgb(255, 255, 255)',
      errorContainer: 'rgb(255, 218, 214)',
      onErrorContainer: 'rgb(65, 0, 2)',
      background: 'rgb(252, 252, 255)',
      onBackground: 'rgb(26, 28, 30)',
      surface: 'rgb(252, 252, 255)',
      onSurface: 'rgb(26, 28, 30)',
      surfaceVariant: 'rgb(222, 227, 235)',
      onSurfaceVariant: 'rgb(66, 71, 78)',
      outline: 'rgb(114, 119, 127)',
      outlineVariant: 'rgb(194, 199, 207)',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: 'rgb(47, 48, 51)',
      inverseOnSurface: 'rgb(240, 240, 244)',
      inversePrimary: 'rgb(150, 204, 255)',
      elevation: {
        level0: 'transparent',
        level1: 'rgb(239, 244, 250)',
        level2: 'rgb(232, 240, 247)',
        level3: 'rgb(224, 235, 244)',
        level4: 'rgb(222, 234, 243)',
        level5: 'rgb(217, 231, 241)',
      },
      surfaceDisabled: 'rgba(26, 28, 30, 0.12)',
      onSurfaceDisabled: 'rgba(26, 28, 30, 0.38)',
      backdrop: 'rgba(44, 49, 55, 0.4)',
      quaternary: 'rgb(150, 73, 0)',
      onQuaternary: 'rgb(255, 255, 255)',
      quaternaryContainer: 'rgb(255, 220, 198)',
      onQuaternaryContainer: 'rgb(49, 19, 0)',
    },
    spacing: {
      xxs: 4,
      xs: 8,
      sm: 12,
      md: 16,
      lg: 24,
    },
    fontSize: {
      xs: 10,
      sm: 12,
      md: 16,
      lg: 18,
      xl: 20,
    },
  };
  return (
    <Card
      theme={theme}
      style={{
        marginBottom: theme.spacing.md,
      }}
    >
      <Card.Title
        theme={theme}
        title={<Text variant='titleMedium'>{item.name}</Text>}
        subtitle={
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              columnGap: theme.spacing.lg,
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                columnGap: theme.spacing.xs,
              }}
            >
              <Icon
                name={'calendar-range'}
                size={16}
                color={theme.colors.onSecondaryContainer}
              />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                columnGap: theme.spacing.xs,
              }}
            >
              <Icon
                name={'timer'}
                size={16}
                color={theme.colors.onSecondaryContainer}
              />
            </View>
          </View>
        }
        rightStyle={{ right: theme.spacing.md, bottom: theme.spacing.sm }}
        right={props => (
          <Icon
            name={'dots-vertical'}
            size={22}
            color={theme.colors.onSecondaryContainer}
          />
        )}
      />
      <Card.Content>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
        >
          <View style={{ marginBottom: theme.spacing.xxs }}>
            <Text variant='titleSmall' style={{}}>
              Exercise
            </Text>
          </View>
          <Text variant='titleSmall'>Total lifted</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default RenderItem;

const styles = StyleSheet.create({});
