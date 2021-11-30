import isComponentNode from '../utils';

const getPathInTree = (
  tree: any,
  callback: (node: any) => boolean,
  pathKey = 'title',
): string[] => {
  if (isComponentNode(tree)) {
    return [tree[pathKey]];
  }

  if (Array.isArray(tree)) {
    return tree.reduce(
      (acc, node) =>
        acc.length ? acc : getPathInTree(node, callback, pathKey),
      [],
    );
  }

  const { children, [pathKey]: key } = tree;

  if (Array.isArray(children)) {
    const result = getPathInTree(children, callback, pathKey);

    if (result.length) {
      return [key, ...result];
    }
  }

  return callback(tree) ? [key] : [];
};

export default getPathInTree;
