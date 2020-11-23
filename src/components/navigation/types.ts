import React from 'react';
import { BoxProps } from 'rebass';

export interface NavigationItemProps extends Omit<BoxProps, 'css,tId'> {
  title: string;
  tId: string;
  icon?: any;
  isActive?: boolean;
  isSubItem?: boolean;
  hasDivider?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export interface TreeNode extends NavigationItemProps {
  tId: string;
  title: string;
  icon?: any;
  children?: TreeNode[];
}
