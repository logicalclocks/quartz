import React, { useRef } from 'react';
import { Flex, FlexProps } from 'rebass';
import * as R from 'ramda';

import styles from './dropdown-button.styles';
import useDropdown from '../../utils/useDropdown';
import Dropdown, { DropdownProps } from '../dropdown';

export interface DropdownButtonProps extends Omit<FlexProps, 'css'> {
  alignLeft?: boolean;
  dropdownSx?: DropdownProps['sx'];
  items: DropdownProps['items'];
  containerOpenSx?: FlexProps['sx'];
  renderButton: ({
    onClick,
    isOpen,
  }: {
    onClick: () => void;
    isOpen: boolean;
  }) => React.ReactNode;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  alignLeft = false,
  dropdownSx = {},
  items,
  containerOpenSx = {},
  renderButton,
  sx = {},
  ...restProps
}) => {
  const [isOpen, handleToggle, handleClickOutside] = useDropdown();
  const containerRef = useRef<HTMLElement>();

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
        items={items}
      />
    </Flex>
  );
};

export default DropdownButton;
