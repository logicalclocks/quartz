/// <reference types="react" />
import { TextProps } from 'rebass';
import { Intents } from '../intents';
export interface EditableSelectInfoProps extends Omit<TextProps, 'css'> {
    intent?: Intents;
    children: React.ReactNode;
}
declare const EditableSelectInfo: ({ intent, children, ...props }: EditableSelectInfoProps) => import("react/jsx-runtime").JSX.Element;
export default EditableSelectInfo;
