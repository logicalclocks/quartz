/// <reference types="react" />
import { ButtonProps } from 'rebass';
export interface QuartzFooterButtonProps extends Omit<ButtonProps, 'css'> {
    children: React.ReactNode;
    intent?: 'primary';
}
declare const FooterButton: ({ intent, children, ...props }: QuartzFooterButtonProps) => import("react/jsx-runtime").JSX.Element;
export default FooterButton;
