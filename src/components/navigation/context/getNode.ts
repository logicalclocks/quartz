import { TreeNode } from '../types';
import isComponentNode from '../utils';

type ReturnType = TreeNode | null;

const getNode = (
  tree: TreeNode[] | TreeNode,
  key: string,
  value?: string,
): ReturnType => {
  if (Array.isArray(tree)) {
    return tree.reduce<ReturnType>(
      (acc, node) => acc || getNode(node, key, value),
      null,
    );
  }

  if (isComponentNode(tree)) {
    return tree;
  }

  const { children } = tree;

  if (Array.isArray(children)) {
    const result = getNode(children, key, value);

    if (result) {
      return result;
    }
  }

  return tree[key] === value ? (tree as TreeNode) : null;
};

export default getNode;
