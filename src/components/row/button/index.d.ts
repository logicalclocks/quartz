/// <reference types="react" />
import { ButtonProps } from '../../button';
export interface RowButtonProps extends Omit<ButtonProps, 'icon'> {
    icon: JSX.Element;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    mainText: string;
    disabled?: boolean;
}
declare const RowButton: ({ onClick, icon, mainText, disabled, ...props }: RowButtonProps) => import("react/jsx-runtime").JSX.Element;
export default RowButton;
