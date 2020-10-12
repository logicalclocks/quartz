import { Box } from 'rebass';
import React, { FC, ReactElement, useMemo } from 'react';

// Components
import NavigationItem from '../item';
import NavigationProvider from '../context/navigation.provider';
import NavigationCategory, { NavigationCategoryProps } from '../category';
// Types
import { NavigationItemProps, TreeNode } from '../types';
// Styles
import styles from './navigation.styles';
// Utils
import buildComponentsTree from '../context/buildComponentsTree';
import buildTree from '../context/buildTree';

type INavigation<P> = FC<P> & {
  Item: FC<NavigationItemProps>;
  Category: FC<NavigationCategoryProps>;
};

export interface NavigationProps {
  children?: React.ReactNode;
  onNavigate?: (node: TreeNode | null) => void;
  footer?: React.ReactNode;
  trackBy?: string;
  tree?: TreeNode[];
}

const Navigation: INavigation<NavigationProps> = ({
  footer,
  children,
  tree: propsTree,
  ...props
}: NavigationProps) => {
  const tree = useMemo(() => {
    if (!propsTree) {
      return buildTree(children as ReactElement<NavigationItemProps>);
    }

    return propsTree;
  }, [children, propsTree]);

  const child = useMemo(
    () => (propsTree ? buildComponentsTree(propsTree) : children),
    [propsTree, children],
  );

  return (
    <Box as="aside" tx="navigation" variant="container" sx={styles}>
      <NavigationProvider tree={tree} {...props}>
        <ul>{child}</ul>
        <div>{footer}</div>
      </NavigationProvider>
    </Box>
  );
};

Navigation.Item = NavigationItem;
Navigation.Category = NavigationCategory;

export default Navigation;
