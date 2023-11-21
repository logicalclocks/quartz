/// <reference types="react" />
import { ButtonProps } from 'rebass';
export interface QuartzFileButtonProps extends Omit<ButtonProps, 'css'> {
    children: React.ReactNode;
    intent?: 'secondary';
    href?: string;
}
declare const FileButton: ({ intent, children, href, ...props }: QuartzFileButtonProps) => import("react/jsx-runtime").JSX.Element;
export default FileButton;
