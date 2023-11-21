export type UsePopup = [boolean, () => void, (state: boolean) => void];
declare const usePopup: (isInitialOpen?: boolean) => UsePopup;
export default usePopup;
