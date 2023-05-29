import { useTheme } from 'react-native-paper';
import { AppTheme } from '../theme/theme';

export const useAppTheme = () => useTheme<AppTheme>();
