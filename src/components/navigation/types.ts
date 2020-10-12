import { IconProp } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { BoxProps } from 'rebass';

export interface NavigationItemProps extends Omit<BoxProps, 'css'> {
  title: string;
  icon?: IconProp;
  isActive?: boolean;
  isSubItem?: boolean;
  hasDivider?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export interface TreeNode extends NavigationItemProps {
  title: string;
  icon?: IconProp;
  children?: TreeNode[];
}
