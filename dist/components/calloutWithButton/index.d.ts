/// <reference types="react" />
import { FlexProps } from 'rebass';
import { CalloutTypes } from '../callout';
export interface ICalloutWithButtonProps extends Omit<FlexProps, 'content' | 'css' | 'onClick'> {
    buttonContent?: string | JSX.Element;
    content: string;
    type: CalloutTypes;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    disabledButton?: boolean;
    isButtonLoading?: boolean;
}
declare const CalloutWithButton: ({ buttonContent, content, onClick, type, disabledButton, isButtonLoading, ...props }: ICalloutWithButtonProps) => import("react/jsx-runtime").JSX.Element;
export default CalloutWithButton;
