import { TreeNode } from '../types';

const getNode = (
  tree: TreeNode[] | TreeNode,
  key: string,
  value?: string,
): TreeNode | null => {
  if (Array.isArray(tree)) {
    return tree.reduce(
      (acc: null | TreeNode, node) => acc || getNode(node, key, value),
      null,
    );
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
