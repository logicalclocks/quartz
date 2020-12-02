import React from 'react';
import { BoxProps } from 'rebass';

export interface NavigationItemProps extends Omit<BoxProps, 'css'> {
  title: string;
  icon?: any;
  isActive?: boolean;
  isSubItem?: boolean;
  hasDivider?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  tooltipText?: string;
}

export interface TreeNode extends NavigationItemProps {
  title: string;
  icon?: any;
  children?: TreeNode[];
}
