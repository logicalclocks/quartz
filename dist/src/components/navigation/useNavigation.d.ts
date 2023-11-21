import { NavigationContextValue } from './context/navigation.context';
export interface UseNavigation extends NavigationContextValue {
    isOpen: boolean;
}
declare const useNavigation: () => UseNavigation;
export default useNavigation;
