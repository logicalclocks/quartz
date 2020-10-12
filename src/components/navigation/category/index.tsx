import { Box } from 'rebass';
import React, { FC, memo, useCallback, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import NavigationItem from '../item';
// Styles
import styles from './navigation-category.styles';
// Content
import NavigationContext from '../context/navigation.context';
// Types
import { NavigationItemProps } from '../types';

export interface NavigationCategoryProps
  extends Omit<NavigationItemProps, 'isSubItem'> {
  onBackClick?: () => void;
}

const NavigationCategory: FC<NavigationCategoryProps> = ({
  children,
  title,
  ...props
}: NavigationCategoryProps) => {
  const { onBack } = useContext(NavigationContext);

  const handleBackClick = useCallback(() => {
    onBack(title);
  }, [onBack]);

  return (
    <NavigationItem title={title} {...props}>
      <Box sx={styles} tx="navigation" variant="category">
        <div onClick={handleBackClick} role="button" tabIndex={-1}>
          <FontAwesomeIcon icon="arrow-left" />
          Back
        </div>
        {children}
      </Box>
    </NavigationItem>
  );
};

export default memo(NavigationCategory);
