import { FC } from 'react';
import { FlexProps } from 'rebass';
export interface PaginationProps extends Omit<FlexProps, 'css' | 'onChange'> {
    totalPages: number;
    currentPage: number;
    disabled?: boolean;
    label?: string;
    variant?: 'primary' | 'white';
    onChange: (page: number) => void;
}
declare const Pagination: FC<PaginationProps>;
export default Pagination;
