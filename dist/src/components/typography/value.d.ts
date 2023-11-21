import { TextProps } from 'rebass';
export interface ValueProps extends Omit<TextProps, 'css'> {
    primary?: boolean;
}
declare const Value: ({ primary, sx, ...props }: ValueProps) => import("react/jsx-runtime").JSX.Element;
export default Value;
