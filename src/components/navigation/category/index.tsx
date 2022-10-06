import { Box } from 'rebass';
import React, { FC, memo, useCallback, useContext } from 'react';

// Components
import NavigationItem from '../item';
import Labeling from '../../typography/labeling';
// Styles
import styles from './navigation-category.styles';
// Content
import NavigationContext from '../context/navigation.context';
// Types
import { NavigationItemProps } from '../types';

export interface NavigationCategoryProps
  extends Omit<NavigationItemProps, 'isSubItem'> {
  onBackClick?: () => void;
  hideBack?: boolean;
}

const NavigationCategory: FC<NavigationCategoryProps> = ({
  children,
  title,
  hideBack = false,
  ...props
}: NavigationCategoryProps) => {
  const { onBack } = useContext(NavigationContext);

  const handleBackClick = useCallback(() => {
    onBack(title);
  }, [onBack, title]);

  return (
    <NavigationItem title={title} {...props}>
      <Box sx={styles} tx="navigation" variant="category">
        {!hideBack && (
          <div onClick={handleBackClick} role="button" tabIndex={-1}>
            <Labeling bold>{'<- Back'}</Labeling>
          </div>
        )}
        {children}
      </Box>
    </NavigationItem>
  );
};

export default memo(NavigationCategory);
