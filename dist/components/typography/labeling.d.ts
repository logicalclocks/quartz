import { TextProps } from 'rebass';
export interface LabelingProps extends Omit<TextProps, 'css'> {
    bold?: boolean;
    gray?: boolean;
}
declare const Labeling: ({ children, bold, gray, sx, ...props }: LabelingProps) => import("react/jsx-runtime").JSX.Element;
export default Labeling;
