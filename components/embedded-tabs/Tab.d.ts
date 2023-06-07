import { FC } from 'react';
export interface Props {
    title: string;
    active?: boolean;
    onClick?: () => any;
    disabled?: boolean;
}
declare const Tab: FC<Props>;
export default Tab;
