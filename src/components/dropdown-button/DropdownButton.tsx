import React, { useMemo, useRef } from 'react';
import { Flex, FlexProps } from 'rebass';
import * as R from 'ramda';

import styles from './dropdown-button.styles';
import useDropdown from '../../utils/useDropdown';
import Dropdown, { DropdownProps } from '../dropdown';
import { DropdownItem } from '../dropdown/types';

type RenderDropdownItems = ({
  onClose,
}: {
  onClose: () => void;
}) => DropdownProps['items'];

export interface Props extends Omit<FlexProps, 'css'> {
  /** To align dropdown on the left or right, the default is right alignment
   * TODO: in the future we might need excact place of opening dropdown similar to tooltip
   */
  alignLeft?: boolean;
  /** Setting custom style for container when dropdown is open' */
  containerOpenSx?: FlexProps['sx'];
  /** Setting custom style for dropdown */
  dropdownSx?: DropdownProps['sx'];
  /** dropwdown items weather could be an array, in this case dropdown will be closed after any item clicked
   *  in order to handle closing of dropdown manually you have to pass a callback function which accepts the onClose handler function
   */
  items: DropdownProps['items'] | RenderDropdownItems;
  /** to Render custom component as dropdown's button */
  renderButton: ({
    onClick,
    isOpen,
  }: {
    onClick: () => void;
    isOpen: boolean;
  }) => React.ReactNode;
}

export const DropdownButton: React.FC<Props> = ({
  alignLeft = false,
  containerOpenSx = {},
  dropdownSx = {},
  items,
  renderButton,
  sx = {},
  ...restProps
}) => {
  const [isOpen, handleToggle, handleClickOutside] = useDropdown();
  const containerRef = useRef<HTMLElement>();
  const dropdownItems = useMemo(
    () =>
      R.equals(R.type(items), 'Array')
        ? /** if the items is array then close dropdown after clicking each dropdown item */
          (items as DropdownItem[]).map((item) => ({
            ...item,
            onClick: () => {
              item.onClick(item);
              handleToggle();
            },
          }))
        : (items as RenderDropdownItems)({ onClose: handleToggle }),
    [items, handleToggle],
  );

  return (
    <Flex
      ref={containerRef}
      sx={R.mergeDeepRight(styles.container, {
        ...sx,
        ...(isOpen ? containerOpenSx : {}),
      })}
      {...restProps}
    >
      {renderButton({ isOpen, onClick: handleToggle })}
      <Dropdown
        isOpen={isOpen}
        onClickOutside={handleClickOutside}
        sx={R.mergeDeepRight(
          styles.dropdown(containerRef?.current?.offsetHeight, alignLeft),
          { ...dropdownSx },
        )}
        items={dropdownItems}
      />
    </Flex>
  );
};
