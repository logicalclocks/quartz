import { memo } from 'react';
import NavigationCategory from '../category';
import NavigationItem from '../item';
import { TreeNode } from '../types';

const TreeItemHelper = ({
  tree,
  isFirstLevel = false,
}: {
  tree: TreeNode[] | TreeNode;
  isFirstLevel?: boolean;
}) => {
  if (Array.isArray(tree)) {
    return (
      <ul>
        {tree.map((node: any) => (
          <TreeItem key={node.id} tree={node} isFirstLevel={isFirstLevel} />
        ))}
      </ul>
    );
  }

  if (Array.isArray(tree.children)) {
    const Component: any = isFirstLevel ? NavigationCategory : NavigationItem;
    return (
      <Component key={tree.id} {...tree}>
        <TreeItem tree={tree.children} />
      </Component>
    );
  }

  return <NavigationItem {...(tree as any)} key={tree.id} />;
};

export const TreeItem = memo(TreeItemHelper);
