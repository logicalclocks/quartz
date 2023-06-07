import { createElement } from 'react';
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
    return createElement(
      isFirstLevel ? NavigationCategory : NavigationItem,
      { ...tree, key: tree.id } as any,
      buildComponentsTree(tree.children, false),
    );
  }

  return createElement(NavigationItem, { ...tree, key: tree.id } as any);
};

export default buildComponentsTree;
