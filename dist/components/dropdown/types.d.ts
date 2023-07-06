import { IconName } from '../icon';
import { TooltipProps } from '../tooltip';
export interface DropdownItem<Metadata = {}> {
    value: string | number;
    icon?: IconName;
    id?: string | number;
    hasDivider?: boolean;
    metadata?: Metadata;
    onClick: (item: DropdownItem) => void;
    isLoading?: boolean;
    disabled?: boolean;
    tooltipProps?: Omit<TooltipProps, 'children'>;
}
