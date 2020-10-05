import React, { FC, useCallback, useMemo, useState } from 'react';

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
  const [openPath, setOpenPath] = useState<string[]>([]);

  const handleActivate = useCallback(
    (target: string) => {
      const path = getPathInTree(
        tree,
        (node) => node[trackBy] === target,
        trackBy,
      );

      setActivePath(path);
      setOpenPath(path);

      if (onNavigate) {
        onNavigate(getNode(tree, trackBy, target));
      }
    },
    [tree],
  );

  const handleOpen = useCallback(
    (target: string) => {
      const path = getPathInTree(tree, (node) => node[trackBy] === target);

      setOpenPath(path);
    },
    [tree],
  );

  const handleBack = useCallback(
    (target) => {
      setOpenPath((path) =>
        path.slice(path.indexOf(target) - 1, path.length - 1),
      );
    },
    [openPath],
  );

  const value = useMemo(
    () => ({
      trackBy,
      tree,
      activePath,
      openPath,
      onActivate: handleActivate,
      onOpen: handleOpen,
      onBack: handleBack,
    }),
    [tree, activePath, openPath],
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
