import { Box } from 'rebass';
import React, {
  FC,
  memo,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import { useTheme } from '../../../theme/theme';

// Context
import NavigationContext from '../context/navigation.context';
import { NavigationItemProps } from '../types';
// Styles
import styles from './navigation-item.styles';
import Tooltip from '../../tooltip';
import TooltipPositions from '../../tooltip/positions';

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
  const theme = useTheme();

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
    mainTooltipText = '',
    secondaryTooltipText = '',
    href,
    ...restProps
  } = props;
  const isOpen =
    activePath.length > 1 && !!activePath.slice(activePath.indexOf(key)).length;

  const isActiveItem = activePath.includes(key);
  const tx = `navigation.${isSubItem ? 'subItem' : 'item'}`;
  const display = children && isActiveItem && isOpen ? 'block' : 'none';

  const disableTooltip = !mainTooltipText && !secondaryTooltipText;

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
  }, [key, onActivate, onClick]);

  useEffect(() => {
    if (isActive) {
      onActivate(key);
    }
  }, [isActive]);

  const component = (
    <Box
      tx={tx}
      variant={getVariant(disabled, isActiveItem)}
      sx={styles}
      onClick={!disabled ? handleClick : undefined}
      className={key == 'oldui' ? 'oldui' : ''}
      {...restProps}
    >
      {icon && (
        <div>
          <Tooltip
            disabled={disableTooltip || !isOpen}
            position={TooltipPositions.right}
            mainText={mainTooltipText}
            secondaryText={secondaryTooltipText}
          >
            {icon}
          </Tooltip>
        </div>
      )}
      <span>
        <Tooltip
          disabled={icon || disableTooltip}
          position={TooltipPositions.right}
          mainText={mainTooltipText}
          secondaryText={secondaryTooltipText}
        >
          <span style={disabled ? { color: theme.colors.gray } : {}}>
            {title}
          </span>
        </Tooltip>
      </span>
    </Box>
  );

  return (
    <Box
      as="li"
      tabIndex={!disabled ? -1 : undefined}
      sx={{
        listStyleType: 'none',
        outline: 'none',
      }}
    >
      {!!href ? (
        <a
          style={{
            textDecoration: 'none',
          }}
          onClick={(e) => {
            e.preventDefault();
          }}
          href={href}
        >
          {component}
        </a>
      ) : (
        component
      )}
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
