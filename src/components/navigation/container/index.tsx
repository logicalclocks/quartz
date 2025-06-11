import * as R from 'ramda';
import { Box, SxStyleProp } from 'rebass';
import { memo, useState } from 'react';

import NavigationProvider from '../context/navigation.provider';
import { TreeNode } from '../types';
import styles from './navigation.styles';
import { TreeItem } from '../context/TreeItem';

export interface NavigationProps {
  footer?: React.ReactNode;
  header?: React.ReactNode;
  trackBy?: keyof TreeNode;
  tree: TreeNode[];
  onNavigate?: (node: TreeNode | null) => void;
  onBackCLick?: () => void;
  sx?: SxStyleProp;
}

const Navigation = ({
  footer,
  header,
  tree,
  sx = {},
  ...props
}: NavigationProps) => {
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
        <ul>
          <TreeItem tree={tree} isFirstLevel />
        </ul>
        {!!footer && <div>{footer}</div>}
      </NavigationProvider>
    </Box>
  );
};

export default memo(Navigation);
