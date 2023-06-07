import React, { FC } from 'react';
import { ButtonProps } from '../../button';
export interface RowButtonProps extends Omit<ButtonProps, 'icon'> {
    icon: JSX.Element;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    mainText: string;
    disabled?: boolean;
}
declare const RowButton: FC<RowButtonProps>;
export default RowButton;
