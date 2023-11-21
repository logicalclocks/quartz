/// <reference types="react" />
import { TabState } from '../types';
export interface TabProps {
    title: string;
    state?: TabState;
    active?: boolean;
    onClick: () => any;
}
declare const _default: import("react").MemoExoticComponent<({ title, active, state, onClick, }: TabProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
