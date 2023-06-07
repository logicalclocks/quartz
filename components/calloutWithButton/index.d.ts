import React, { FC } from 'react';
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
declare const CalloutWithButton: FC<ICalloutWithButtonProps>;
export default CalloutWithButton;
