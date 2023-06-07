import { Box } from 'rebass';
import { FC, ReactElement, useMemo, useState } from 'react';

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
  footer?: React.ReactNode;
  header?: React.ReactNode;
  trackBy?: keyof TreeNode;
  tree?: TreeNode[];
  onNavigate?: (node: TreeNode | null) => void;
  onBackCLick?: () => void;
}

const Navigation: INavigation<NavigationProps> = ({
  footer,
  header,
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
  const [activePath, setActivePath] = useState([]);

  return (
    <Box
      as="aside"
      tx="navigation"
      variant="container"
      sx={styles(activePath.length > 1)}
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
