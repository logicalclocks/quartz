import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { NavigationItemProps } from './item';

export interface TreeNode extends NavigationItemProps {
  title: string;
  icon?: IconProp;
  children?: TreeNode[];
}
