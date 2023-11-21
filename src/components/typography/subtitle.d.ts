import { TextProps } from 'rebass';
export interface SubtitleProps extends Omit<TextProps, 'css'> {
}
declare const Subtitle: (props: SubtitleProps) => import("react/jsx-runtime").JSX.Element;
export default Subtitle;
