import { Box } from 'rebass';
import React, { FC } from 'react';

// Components
import NavigationItem from '../item';
import NavigationCategory from '../category';
// Styles
import styles from './navigation.styles';

export interface NavigationProps {
  children: React.ReactNode;
}

const Navigation: FC<NavigationProps> = ({ children }: NavigationProps) => {
  return (
    <Box as="aside" tx="navigation" variant="container" sx={styles}>
      <ul>{children}</ul>
    </Box>
  );
};

// @ts-ignore
Navigation.Item = NavigationItem;
// @ts-ignore
Navigation.Category = NavigationCategory;

export default Navigation;
