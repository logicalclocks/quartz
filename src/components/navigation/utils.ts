import { ComponentNode, TreeNode } from './types';

const isComponentNode = (tree: TreeNode): tree is ComponentNode => {
  return 'component' in tree;
};

export default isComponentNode;
