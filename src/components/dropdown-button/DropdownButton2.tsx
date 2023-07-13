import { useCallback } from 'react';
import * as R from 'ramda';
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  MenuListProps,
  MenuProps,
  Flex,
  SystemStyleObject,
} from '@chakra-ui/react';

import {
  GetIcon,
  IconButton,
  IconName,
  Spinner,
  Tooltip,
  TooltipPositions,
} from '../..';
import styles from './styles';
import { DropdownProps } from '../dropdown';
import { DropdownItem } from '../dropdown/types';

type RenderDropdownItems = ({
  onClose,
}: {
  onClose: () => void;
}) => DropdownProps['items'];

export interface Props extends Omit<MenuProps, 'children'> {
  /** Dropwdown items either could be an Array, in this case dropdown will be closed after any item clicked
   *  in order to handle closing of dropdown manually you have to pass a callback function which accepts the `onClose` handler function
   */
  items: DropdownProps['items'] | RenderDropdownItems;
  /** To Render custom component as dropdown's button */
  renderButton?: (p: { isOpen?: boolean }) => React.ReactNode;
  sx?: SystemStyleObject | ((isOpen: boolean) => SystemStyleObject);
  menuListProps?: MenuListProps;
}

export const DropdownButton2 = ({
  sx = {},
  placement = 'bottom-end',
  items,
  renderButton,
  menuListProps,
  ...restProps
}: Props) => {
  const dropdownItems = useCallback(
    (onClose: () => void) =>
      R.equals(R.type(items), 'Array')
        ? /** if the items is array then close dropdown after clicking each dropdown item */
          (items as DropdownItem[]).map((item) => ({
            ...item,
            onClick: () => {
              if (!item.disabled) {
                item.onClick(item);
                onClose();
              }
            },
          }))
        : (items as RenderDropdownItems)({ onClose }),
    [items],
  );

  return (
    <Menu placement={placement} closeOnSelect={false} {...restProps}>
      {({ isOpen, onClose }) => (
        <Flex
          sx={
            R.mergeDeepRight(
              styles.container,
              typeof sx === 'function' ? sx(isOpen) : sx,
            ) as SystemStyleObject
          }
        >
          <MenuButton>
            {renderButton ? (
              renderButton({ isOpen })
            ) : (
              <IconButton icon={IconName.more} />
            )}
          </MenuButton>
          <MenuList {...menuListProps}>
            {dropdownItems(onClose).map((item, idx) => (
              // eslint-disable-next-line react/no-array-index-key
              <ul key={idx}>
                <MenuItem
                  onClick={() => item.onClick(item)}
                  isDisabled={item.disabled}
                  icon={
                    item.icon ? (
                      <GetIcon
                        color={item.disabled ? 'gray' : 'black'}
                        icon={item.icon}
                        size="sm"
                      />
                    ) : undefined
                  }
                >
                  <Item {...item} />
                </MenuItem>
                {item.hasDivider && <MenuDivider />}
              </ul>
            ))}
          </MenuList>
        </Flex>
      )}
    </Menu>
  );
};

const Item = ({ value, isLoading, disabled, tooltipProps }: DropdownItem) => (
  <Tooltip
    position={TooltipPositions.right}
    {...tooltipProps}
    containerProps={{ sx: { width: '100%' } }}
  >
    <Flex width="100%">
      <Flex flexGrow={1} alignItems="center">
        {value}
      </Flex>
      {isLoading && (
        <Spinner size={16} ml="15px" color={disabled ? 'gray' : 'primary'} />
      )}
    </Flex>
  </Tooltip>
);
