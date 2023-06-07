import React from 'react';
import { ButtonProps } from 'rebass';
export interface QuartzFileButtonProps extends Omit<ButtonProps, 'css'> {
    children: React.ReactNode | string;
    modeNFiles?: boolean;
    href?: string;
    name?: string;
    currentRef?: any;
    validExtensions?: string[];
    onHandleUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick: (event: React.MouseEvent<HTMLElement>) => void;
    isDisabledUploadButton?: boolean;
}
declare const UploadButton: ({ children, href, modeNFiles, currentRef, name, value, onHandleUpload, handleClick, validExtensions, isDisabledUploadButton, ...props }: QuartzFileButtonProps) => React.JSX.Element;
export default UploadButton;
