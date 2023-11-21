import { FlexProps } from 'rebass';
export interface PaginationProps extends Omit<FlexProps, 'css' | 'onChange'> {
    totalPages: number;
    currentPage: number;
    disabled?: boolean;
    label?: string;
    variant?: 'primary' | 'white';
    onChange: (page: number) => void;
}
declare const Pagination: ({ totalPages, currentPage, disabled, label, onChange, variant, ...props }: PaginationProps) => import("react/jsx-runtime").JSX.Element;
export default Pagination;
