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
declare const NavigationContext: React.Context<NavigationContextValue>;
export default NavigationContext;
