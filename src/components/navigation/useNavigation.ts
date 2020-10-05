import { useContext } from 'react';
import NavigationContext, {
  NavigationContextValue,
} from './context/navigation.context';

export interface UseNavigation extends NavigationContextValue {
  isOpen: boolean;
}

const useNavigation = (): UseNavigation => {
  const { openPath, ...contextData } = useContext(NavigationContext);

  return {
    isOpen: !!openPath.length,
    openPath,
    ...contextData,
  };
};

export default useNavigation;
