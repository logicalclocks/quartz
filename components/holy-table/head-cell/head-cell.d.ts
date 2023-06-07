import { ReactNode } from 'react';
import { BoxProps } from 'rebass';
interface Props extends Omit<BoxProps, 'css'> {
    fillSpace?: boolean;
    children: ReactNode;
}
declare const HeadCell: ({ sx, fillSpace, children, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export default HeadCell;
