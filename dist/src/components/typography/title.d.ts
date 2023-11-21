import { TextProps } from 'rebass';
export interface TitleProps extends Omit<TextProps, 'css'> {
    uppercase?: boolean;
}
declare const Title: ({ uppercase, ...props }: TitleProps) => import("react/jsx-runtime").JSX.Element;
export default Title;
