import { Box, BoxProps } from 'rebass';
import React, {
  FC,
  memo,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Context
import NavigationContext from '../context/navigation.context';
// Styles
import styles from './navigation-item.styles';

export interface NavigationItemProps extends Omit<BoxProps, 'css'> {
  title: string;
  icon?: IconProp;
  isActive?: boolean;
  isSubItem?: boolean;
  hasDivider?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const getVariant = (isDisabled = false, isActive = false): string => {
  if (isDisabled) {
    return 'disabled';
  }

  return isActive ? 'active' : 'default';
};

const NavigationItem: FC<NavigationItemProps> = (
  props: NavigationItemProps,
) => {
  const { activePath, onActivate, trackBy } = useContext(NavigationContext);

  const {
    // @ts-ignore
    [trackBy]: key,
    icon,
    title,
    isActive,
    isSubItem,
    children,
    hasDivider,
    onClick = () => {},
    disabled,
    ...restProps
  } = props;

  const isOpen = activePath.includes(key);
  const isActiveItem = activePath.includes(key);
  const tx = `navigation.${isSubItem ? 'subItem' : 'item'}`;
  const display = children && isOpen ? 'block' : 'none';

  const childs = useMemo(
    () =>
      React.Children.map(children, (child) =>
        React.cloneElement(child as ReactElement<NavigationItemProps>, {
          isSubItem: true,
        }),
      ),
    [children],
  );

  // Handlers
  const handleClick = useCallback(() => {
    onClick();
    onActivate(key);
  }, [disabled]);

  useEffect(() => {
    if (isActive) {
      onActivate(key);
    }
  }, []);

  return (
    <Box
      as="li"
      tabIndex={!disabled ? -1 : undefined}
      sx={{
        listStyleType: 'none',
        outline: 'none',
      }}
    >
      <Box
        tx={tx}
        variant={getVariant(disabled, isActiveItem)}
        sx={styles}
        onClick={!disabled ? handleClick : undefined}
        {...restProps}
      >
        {icon && (
          <div>
            <FontAwesomeIcon icon={icon} />
          </div>
        )}
        <span>{title}</span>
      </Box>
      {hasDivider && <div />}
      {childs && (
        <Box paddingLeft="33px" as="ul" display={display}>
          {childs}
        </Box>
      )}
    </Box>
  );
};

export default memo(NavigationItem);
