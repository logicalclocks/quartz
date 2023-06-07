import React, { FC } from 'react';
import { ButtonProps } from 'rebass';
export interface QuartzFooterButtonProps extends Omit<ButtonProps, 'css'> {
    children: React.ReactNode;
    intent?: 'primary';
}
declare const FooterButton: FC<QuartzFooterButtonProps>;
export default FooterButton;
