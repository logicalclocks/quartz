import { ComponentNode, TreeNode } from './types';

export default function isComponentNode(tree: TreeNode): tree is ComponentNode {
  return 'component' in tree;
}
