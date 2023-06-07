import React, { FC } from 'react';
import { CheckboxProps as RebassCheckboxProps } from '@rebass/forms';
export interface ToggleButtonProps extends Omit<RebassCheckboxProps, 'css'> {
    children: string | React.ReactNode;
    variant?: 'primary' | 'white';
}
declare const ToggleButton: FC<ToggleButtonProps>;
export default ToggleButton;
