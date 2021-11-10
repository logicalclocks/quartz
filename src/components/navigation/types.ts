import React from 'react';
import { BoxProps } from 'rebass';

export interface NavigationItemProps extends Omit<BoxProps, 'css' | 'id'> {
  title: string;
  id: string;
  icon?: any;
  isActive?: boolean;
  isSubItem?: boolean;
  hasDivider?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  mainTooltipText?: string;
  secondaryTooltipText?: string;
  href?: string;
}

export interface TreeNode extends NavigationItemProps {
  id: string;
  title: string;
  icon?: any;
  href?: string;
  children?: TreeNode[];
  hideBack?: boolean;
}
