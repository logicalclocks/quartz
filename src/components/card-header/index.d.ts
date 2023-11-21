/// <reference types="react" />
import { BoxProps } from 'rebass';
export interface CardHeaderProps extends Omit<BoxProps, 'title' | 'css'> {
    title?: React.ReactElement | string;
    actions?: React.ReactNode;
    withShadow?: boolean;
    withBorderBottom?: boolean;
}
declare const CardHeader: ({ title, actions, withShadow, withBorderBottom, ...props }: CardHeaderProps) => import("react/jsx-runtime").JSX.Element;
export default CardHeader;
