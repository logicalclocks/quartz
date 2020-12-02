import React from 'react';
import { TreeNode } from '../types';

export interface NavigationContextValue {
  trackBy: string;
  activePath: string[];
  tree: any;
  activeNode: TreeNode | null;
  onActivate: (name: string) => void;
  onBack: (name: string) => void;
}

const NavigationContext = React.createContext<NavigationContextValue>({
  trackBy: 'id',
  activePath: [],
  tree: [],
  activeNode: null,
  onActivate: () => {},
  onBack: () => {},
});

export default NavigationContext;
