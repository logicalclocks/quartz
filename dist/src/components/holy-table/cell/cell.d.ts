import { ReactNode } from 'react';
import { BoxProps } from 'rebass';
interface Props extends Omit<BoxProps, 'css'> {
    children: ReactNode;
}
declare const Cell: ({ sx, children, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export default Cell;
