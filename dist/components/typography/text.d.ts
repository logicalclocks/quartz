import { TextProps as RebassTextProps } from 'rebass';
export interface TextProps extends Omit<RebassTextProps, 'css'> {
}
declare const Text: ({ ...props }: TextProps) => import("react/jsx-runtime").JSX.Element;
export default Text;
