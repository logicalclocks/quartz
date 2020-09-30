import React, { FC } from 'react';
import { Box } from 'rebass';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import NavigationItem from '../item';
// Styles
import styles from './navigation-category.styles';

export interface NavigationCategoryProps {
  title: string;
  icon: IconProp;
  children: React.ReactNode;
  isActive?: boolean;
  onOpen?: (event: React.SyntheticEvent<HTMLDivElement>) => void;
  onClose?: (event: React.SyntheticEvent<HTMLDivElement>) => void;
}

const NavigationCategory: FC<NavigationCategoryProps> = ({
  title,
  isActive,
  icon,
  children,
  onClose,
}: NavigationCategoryProps) => (
  <NavigationItem title={title} icon={icon} isActive={isActive}>
    <Box sx={styles}>
      <div onClick={onClose}>
        <FontAwesomeIcon icon="arrow-left" />
        Back
      </div>
      {children}
    </Box>
  </NavigationItem>
);

export default NavigationCategory;
