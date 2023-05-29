import { StyleSheet } from 'react-native';
import React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { CommonActions } from '@react-navigation/native';
import TabIconRender from '../tab-icon-render/TabIconRender';
import { TabNavigatorProps } from '../../../app.interface';
import { useAppTheme } from '../../../utils/use-app-theme';

export const TabNavigator = ({
  navigation,
  state,
  descriptors,
  insets,
}: TabNavigatorProps) => {
  const theme = useAppTheme();

  return (
    <BottomNavigation.Bar
      theme={theme}
      navigationState={state}
      safeAreaInsets={insets}
      onTabPress={({ route, preventDefault }) => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (event.defaultPrevented) {
          preventDefault();
        } else {
          navigation.dispatch({
            ...CommonActions.navigate(route.name, route.params),
            target: state.key,
          });
        }
      }}
      renderIcon={({ route, color }) =>
        TabIconRender({ route, color, size: 24 })
      }
      /** @ts-ignore */
      getLabelText={({ route }) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        return label || '';
      }}
    />
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
