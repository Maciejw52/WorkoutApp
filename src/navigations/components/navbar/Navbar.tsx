import React from 'react';
import { Appbar } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import { useAppTheme } from '../../../utils/use-app-theme';
import ProfileDialog from '../profile-dialog/profile-dialog';

const Navbar = ({ route }: { route: any }) => {
  const theme = useAppTheme();
  const { key } = useRoute();

  const handleBackButtonPress = () => {
    if (key === 'a') {
    }
  };

  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <>
      <Appbar.Header mode='small' theme={theme}>
        {!route.params?.initialRoute && (
          <Appbar.BackAction onPress={handleBackButtonPress} />
        )}
        <Appbar.Content title={route.name} />
        <Appbar.Action icon='account-circle' onPress={showDialog} />
        <Appbar.Action icon='dots-vertical' />
      </Appbar.Header>
      <ProfileDialog visible={visible} hideDialog={hideDialog} />
    </>
  );
};

export default Navbar;
