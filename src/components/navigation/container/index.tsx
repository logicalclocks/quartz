import * as R from 'ramda';
import { Box, SxStyleProp } from 'rebass';
import { ReactElement, useMemo, useState } from 'react';

import NavigationItem from '../item';
import NavigationProvider from '../context/navigation.provider';
import NavigationCategory, { NavigationCategoryProps } from '../category';
import { NavigationItemProps, TreeNode } from '../types';
import styles from './navigation.styles';
import buildComponentsTree from '../context/buildComponentsTree';
import buildTree from '../context/buildTree';

type INavigation<P> = React.FC<P> & {
  Item: React.FC<NavigationItemProps>;
  Category: React.FC<NavigationCategoryProps>;
};

export interface NavigationProps {
  children?: React.ReactNode;
  footer?: React.ReactNode;
  header?: React.ReactNode;
  trackBy?: keyof TreeNode;
  tree?: TreeNode[];
  onNavigate?: (node: TreeNode | null) => void;
  onBackCLick?: () => void;
  sx?: SxStyleProp;
}

const Navigation: INavigation<NavigationProps> = ({
  footer,
  header,
  children,
  tree: propsTree,
  sx,
  ...props
}) => {
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
  const [activePath, setActivePath] = useState([]);

  return (
    <Box
      as="aside"
      tx="navigation"
      variant="container"
      sx={R.mergeDeepRight(styles(activePath.length > 1), sx as object)}
    >
      <NavigationProvider tree={tree} {...props} takeActivePath={setActivePath}>
        {!!header && <div>{header}</div>}
        <ul>{child}</ul>
        {!!footer && <div>{footer}</div>}
      </NavigationProvider>
    </Box>
  );
};

Navigation.Item = NavigationItem;
Navigation.Category = NavigationCategory;

export default Navigation;
