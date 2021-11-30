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

export interface RecursiveNode extends NavigationItemProps {
  children?: TreeNode[];
  hideBack?: boolean;
}

export interface ComponentNode extends Omit<NavigationItemProps, 'title'> {
  id: string;
  component: React.ReactElement;
  hideBack?: boolean;
}

export type TreeNode = ComponentNode | RecursiveNode;
