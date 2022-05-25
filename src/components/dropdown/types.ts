import { IconName } from '../icon';

export interface DropdownItem<Metadata = {}> {
  value: string | number;
  icon?: IconName;
  id?: string | number;
  hasDivider?: boolean;
  metadata?: Metadata;
  onClick: (item: DropdownItem) => void;
}
