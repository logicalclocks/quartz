export type UseDropdown = [boolean, (state?: boolean) => void, () => void];
declare const useDropdown: (isInitialOpen?: boolean) => UseDropdown;
export default useDropdown;
