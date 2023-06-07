/// <reference types="react" />
import { TextProps } from 'rebass';
import { Intents } from '../../intents';
export interface SelectInfoProps extends Omit<TextProps, 'css'> {
    intent?: Intents;
    children: React.ReactNode;
}
declare const SelectInfo: ({ intent, children, ...props }: SelectInfoProps) => import("react/jsx-runtime").JSX.Element;
export default SelectInfo;
