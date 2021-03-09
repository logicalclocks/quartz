import { Box } from 'rebass';
import React, {
  FC,
  memo,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Lottie from 'lottie-react-web';

// Context
import NavigationContext from '../context/navigation.context';
import { NavigationItemProps } from '../types';
// Styles
import styles from './navigation-item.styles';
import { Tooltip } from '../../../index';
import TooltipPositions from '../../tooltip/positions';
import { useTheme } from 'emotion-theming';
import { ITheme } from '../../../theme/types';

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

  const theme = useTheme<ITheme>();

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
    tooltipText = '',
    href,
    ...restProps
  } = props;
  const isOpen =
    activePath.length > 1 && !!activePath.slice(activePath.indexOf(key)).length;

  const isActiveItem = activePath.includes(key);
  const tx = `navigation.${isSubItem ? 'subItem' : 'item'}`;
  const display = children && isActiveItem && isOpen ? 'block' : 'none';

  const disableTooltip = !tooltipText;

  const childs = useMemo(
    () =>
      React.Children.map(children, (child) =>
        React.cloneElement(child as ReactElement<NavigationItemProps>, {
          isSubItem: true,
        }),
      ),
    [children],
  );

  const [isToggled, setToggled] = useState(false);

  // Handlers
  const handleClick = useCallback(() => {
    onClick();
    onActivate(key);
  }, [disabled]);

  useEffect(() => {
    if (isActive) {
      onActivate(key);
      setToggled(true);
    } else {
      setToggled(false);
    }
  }, [isActive]);

  const component = (
    <Box
      tx={tx}
      variant={getVariant(disabled, isActiveItem)}
      sx={styles}
      onClick={!disabled ? handleClick : undefined}
      {...restProps}
    >
      {icon && (
        <div>
          <Tooltip
            disabled={disableTooltip || !isOpen}
            position={TooltipPositions.right}
            mainText={tooltipText}
          >
            <Lottie
              width={22}
              height={22}
              direction={isToggled ? 1 : -1}
              options={{
                animationData: icon,
                loop: false,
              }}
            />
          </Tooltip>
        </div>
      )}
      <span>
        <Tooltip
          disabled={icon || disableTooltip}
          position={TooltipPositions.right}
          mainText={tooltipText}
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
