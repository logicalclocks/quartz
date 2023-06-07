import React from 'react';
import { PopupProps } from '../index';
import { ButtonProps } from '../../..';
export interface TinyPopupProps extends Omit<PopupProps, 'footer'> {
    secondaryText?: string;
    mainButtonProps?: ButtonProps;
    secondaryButtonProps?: ButtonProps;
    tertiaryButtonProps?: ButtonProps;
    withCloseButton?: boolean;
    /**
     * @deprecated [#1] since version 2.6.1 [#2].
     * */
    contentHeight?: string;
}
declare const TinyPopup: ({ title, secondaryText, onClose, mainButtonProps, secondaryButtonProps, tertiaryButtonProps, children, withCloseButton, size, ...props }: TinyPopupProps) => React.JSX.Element;
export default TinyPopup;
