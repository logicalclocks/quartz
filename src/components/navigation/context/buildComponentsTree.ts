import React from 'react';
import NavigationCategory from '../category';
import NavigationItem from '../item';
import { TreeNode } from '../types';
import isComponentNode from '../utils';

const buildComponentsTree = (
  tree: TreeNode[] | TreeNode,
  isFirstLevel = true,
): any => {
  if (Array.isArray(tree)) {
    return tree.map((node) => buildComponentsTree(node, isFirstLevel));
  }

  if (isComponentNode(tree)) {
    return React.cloneElement(tree.component!, {
      key: tree.id,
    });
  }

  const { children, ...nodeProps } = tree;

  if (Array.isArray(tree.children)) {
    return React.createElement(
      isFirstLevel ? NavigationCategory : NavigationItem,
      { key: tree.id, ...nodeProps },
      buildComponentsTree(tree.children, false),
    );
  }

  return React.createElement(
    NavigationItem,
    { ...nodeProps, key: tree.id },
    children,
  );
};

export default buildComponentsTree;
