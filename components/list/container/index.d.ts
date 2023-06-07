import React from 'react';
import { BoxProps } from 'rebass';
export interface ListProps extends Omit<BoxProps, 'css'> {
    children: React.ReactNode;
}
declare const List: React.ForwardRefExoticComponent<Omit<ListProps, "ref"> & React.RefAttributes<HTMLUListElement>>;
export default List;
