import { useContext } from 'react';
import NavigationContext, {
  NavigationContextValue,
} from './context/navigation.context';

export interface UseNavigation extends NavigationContextValue {
  isOpen: boolean;
}

const useNavigation = (): UseNavigation => {
  const { activePath, activeNode, ...contextData } = useContext(
    NavigationContext,
  );

  return {
    isOpen: activePath.length > 1 || !!activeNode?.children,
    activeNode,
    activePath,
    ...contextData,
  };
};

export default useNavigation;
