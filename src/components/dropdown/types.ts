import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface DropdownItem<Metadata = {}> {
  value: string | number;
  icon?: IconProp;
  id?: string | number;
  hasDivider?: boolean;
  metadata?: Metadata;
  onClick: (item: DropdownItem) => void;
}
