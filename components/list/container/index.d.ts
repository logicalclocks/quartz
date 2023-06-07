/// <reference types="react" />
import { BoxProps } from 'rebass';
export interface ListProps extends Omit<BoxProps, 'css'> {
    children: React.ReactNode;
}
declare const List: import("react").ForwardRefExoticComponent<Omit<ListProps, "ref"> & import("react").RefAttributes<HTMLUListElement>>;
export default List;
