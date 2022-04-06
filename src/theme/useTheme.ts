import { useTheme as useEmotionTheme } from 'emotion-theming';
import { ITheme } from './types';

const useTheme = useEmotionTheme as () => ITheme;
export default useTheme;
