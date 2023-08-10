/// <reference types="react" />
import { IconName } from '../icon';
import { TooltipProps } from '../tooltip';
export interface DropdownItem<Metadata = {}> {
    value: React.ReactNode;
    icon?: IconName;
    id?: string | number;
    hasDivider?: boolean;
    metadata?: Metadata;
    onClick: (item: DropdownItem) => void;
    isLoading?: boolean;
    disabled?: boolean;
    tooltipProps?: Omit<TooltipProps, 'children'>;
}
