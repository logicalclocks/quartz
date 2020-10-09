import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';

// Context
import NavigationContext from './navigation.context';
// Utils
import getNode from './getNode';
import getPathInTree from './getPathInTree';
// Types
import { TreeNode } from '../types';

export interface CategoriesProviderProps {
  tree: TreeNode[];
  trackBy?: string;
  children: React.ReactNode;
  onNavigate?: (node: TreeNode | null) => void;
}

const NavigationProvider: FC<CategoriesProviderProps> = ({
  tree,
  trackBy = 'title',
  children,
  onNavigate,
}: CategoriesProviderProps) => {
  const [activePath, setActivePath] = useState<string[]>([]);
  const [activeNode, setActiveNode] = useState<TreeNode | null>(null);

  const handleActivate = useCallback(
    (target: string) => {
      const path = getPathInTree(
        tree,
        (node) => node[trackBy] === target,
        trackBy,
      );

      setActivePath(path);
    },
    [tree],
  );

  const handleBack = useCallback(
    (target) => {
      setActivePath((path) =>
        path.slice(path.indexOf(target) - 1, path.length - 1),
      );
    },
    [activePath],
  );

  const value = useMemo(
    () => ({
      trackBy,
      tree,
      activeNode,
      activePath,
      onActivate: handleActivate,
      onBack: handleBack,
    }),
    [tree, activePath.length, activeNode],
  );

  useEffect(() => {
    const node = getNode(tree, trackBy, activePath[activePath.length - 1]);

    if (onNavigate) {
      onNavigate(node);
    }

    setActiveNode(node);
  }, [activePath, onNavigate, setActiveNode]);

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
