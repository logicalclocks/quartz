import { TextProps } from 'rebass';
import { Intents } from '../intents';
export interface InputInfoProps extends Omit<TextProps, 'css'> {
    intent?: Intents;
}
declare const InputInfo: ({ intent, children, sx, ...props }: InputInfoProps) => import("react/jsx-runtime").JSX.Element;
export default InputInfo;
