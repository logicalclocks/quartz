import React from 'react';
import NavigationCategory from '../category';
import NavigationItem from '../item';
import { TreeNode } from '../types';

const buildComponentsTree = (
  tree: TreeNode[] | TreeNode,
  isFirstLevel = true,
): any => {
  if (Array.isArray(tree)) {
    return tree.map((node) => buildComponentsTree(node, isFirstLevel));
  }

  if (Array.isArray(tree.children)) {
    return React.createElement(
      isFirstLevel ? NavigationCategory : NavigationItem,
      { ...tree, key: tree.id },
      buildComponentsTree(tree.children, false),
    );
  }

  return React.createElement(NavigationItem, { ...tree, key: tree.id });
};

export default buildComponentsTree;
