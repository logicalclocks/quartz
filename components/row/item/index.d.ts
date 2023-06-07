import { FC, ComponentType } from 'react';
import { TableItemPosition } from './types';
import { Mode } from '../container/types';
export interface RowItemProps {
    mode?: Mode;
    component: ComponentType<any>;
    componentProps: any;
    position?: TableItemPosition;
    fillSpace?: boolean;
}
declare const RowItem: FC<RowItemProps>;
export default RowItem;
