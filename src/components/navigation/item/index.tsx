import { Box, BoxProps } from 'rebass';
import React, { FC, useCallback } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useItemState from '../useItemState';

// Styles
import styles from './navigation-item.styles';

export interface NavigationItemProps extends Omit<BoxProps, 'css'> {
  title: string;
  icon?: IconProp;
  isActive?: boolean;
  isSubItem?: boolean;
  children?: React.ReactNode;
}

const NavigationItem: FC<NavigationItemProps> = ({
  icon,
  title,
  isActive,
  isSubItem,
  children,
  ...props
}: NavigationItemProps) => {
  const [active, setActive] = useItemState(isActive);

  const childs = React.Children.map(children, (child) =>
    React.cloneElement(child, { isSubItem: true }),
  );

  const handleClick = useCallback(() => {
    setActive((a) => !a);
  }, [active]);

  return (
    <Box as="li" sx={{ listStyleType: 'none' }}>
      <Box
        tx={`navigation.${isSubItem ? 'subItem' : 'item'}`}
        variant={active ? 'active' : 'default'}
        sx={styles}
        onClick={handleClick}
        {...props}
      >
        {icon && (
          <div>
            <FontAwesomeIcon icon={icon} />
          </div>
        )}
        <span>{title}</span>
      </Box>
      {childs && active && (
        <Box
          as="ul"
          sx={{
            pl: '33px',
          }}
        >
          {childs}
        </Box>
      )}
    </Box>
  );
};

export default NavigationItem;
