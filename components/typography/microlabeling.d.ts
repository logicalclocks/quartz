import { TextProps } from 'rebass';
export interface MicrolabelingProps extends Omit<TextProps, 'css'> {
    gray?: boolean;
}
declare const Microlabeling: ({ gray, sx, ...props }: MicrolabelingProps) => import("react/jsx-runtime").JSX.Element;
export default Microlabeling;
