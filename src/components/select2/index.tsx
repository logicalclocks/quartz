import React, { FC, useCallback, useMemo, useRef, useState } from 'react';

// Components
import { Box, Flex } from 'rebass';
import SelectLabel from './label';
import List from '../list/container';
import Label, { LabelProps } from '../label';
import SelectInfo from './info';
import Divider from '../divider';
import Input from '../input';
import Value from '../typography/value';
import useKeyUp from '../../utils/useKeyUp';
import icons from '../../sources/icons';
import StickyPortal, { CONTENT_ID } from '../sticky-portal/StickyPortal';
// List types
import SelectList from './lists/select-list';
import SelectListMulti from './lists/select-list-multi';
// Types
import { Intents } from '../intents';
import { SelectOpt } from './types';
// Styles
import { listStyles, bottomActionStyles } from './select.styles';
// Hooks
import useDropdown from '../../utils/useDropdown';
import useOnClickOutside from '../../utils/useClickOutside';

export interface SelectProps
  extends Omit<LabelProps, 'onChange' | 'children' | 'value'> {
  value: SelectOpt[]; // TODO: Remove array
  options: SelectOpt[];
  placeholder: string;
  isMulti?: boolean;
  appendToBody?: boolean;
  label?: string;
  disabled?: boolean;
  width?: string | number;
  maxListHeight?: string;
  labelAction?: React.ReactNode;
  listWidth?: string | number;
  variant?: 'primary' | 'white';
  info?: string;
  intent?: Intents;
  onChange: (value: SelectOpt[]) => void;
  noDataMessage?: string;
  bottomActionText?: string;
  bottomActionHandler?: () => void;
  hasPlaceholder?: boolean;
  hasSearch?: boolean;
  searchPlaceholder?: string;
  customFilter?: React.ReactNode;
  noMatchText?: string;
  needSecondaryText?: boolean;
  deletabled?: boolean;
  needSwap?: boolean;
}

const Select: FC<SelectProps> = ({
  labelAction,
  label,
  width = '180px',
  variant = 'primary',
  options,
  disabled,
  listWidth,
  value,
  isMulti,
  placeholder,
  maxListHeight = '150px',
  noDataMessage,
  info,
  intent = 'default',
  onChange,
  bottomActionHandler,
  bottomActionText,
  hasPlaceholder = true,
  hasSearch = false,
  searchPlaceholder = 'Find...',
  customFilter,
  noMatchText = 'No result',
  needSecondaryText = true,
  deletabled,
  needSwap = false,
  appendToBody = false,
  ...props
}: SelectProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, handleToggle, handleClickOutside] = useDropdown(false);
  useOnClickOutside<HTMLDivElement>(
    handleClickOutside,
    [containerRef],
    [CONTENT_ID],
  );

  const [search, setSearch] = useState('');

  const handleCloseOnEsc = useCallback(() => {
    if (isOpen) handleToggle();
  }, [isOpen, handleToggle]);

  useKeyUp(handleCloseOnEsc);

  const filteredOptions = useMemo(() => {
    if (!search) return options;
    return options.filter((opt) => {
      const searchString = search.toLowerCase().trim();
      return opt.label.toLowerCase().includes(searchString);
    });
  }, [search, options]);

  // Handlers
  const handleLabelClick = useCallback(() => {
    if (!disabled) {
      handleToggle();
      setSearch('');
    }
  }, [handleToggle, disabled]);

  const AppendedToBody = useCallback(
    ({ refEl, children }) => (
      <StickyPortal handleClose={handleClickOutside} refEl={refEl}>
        {children}
      </StickyPortal>
    ),
    [handleClickOutside],
  );

  const DropdownWrapper: FC<{ children: any; refEl: any }> = ({
    children,
    refEl,
    // eslint-disable-next-line arrow-body-style
  }) => {
    return appendToBody ? (
      <AppendedToBody refEl={refEl}>{children}</AppendedToBody>
    ) : (
      children
    );
  };

  const dropdrownPosition = useCallback(() => {
    if (containerRef?.current) {
      return containerRef.current.offsetHeight + 1;
    }
    return 33;
  }, []);

  const dropdrownWidth = useCallback(() => {
    if (listWidth === '100%' && containerRef.current) {
      return `${containerRef.current.offsetWidth - 2}px`;
    }
    if (listWidth && listWidth !== '') {
      return listWidth;
    }
    return 'max-content';
  }, [listWidth]);

  return (
    <Label
      action={labelAction}
      text={label}
      width={width}
      {...props}
      as="span"
      onClick={handleLabelClick}
    >
      <SelectLabel
        deletabled={deletabled}
        hasPlaceholder={hasPlaceholder}
        intent={intent}
        onChange={onChange}
        variant={disabled ? 'disabled' : variant}
        placeholder={placeholder}
        value={value}
        isMulti={isMulti}
        noDataMessage={noDataMessage}
        options={options}
        ref={containerRef}
        needSecondaryText={needSecondaryText}
        needSwap={needSwap}
      >
        {isOpen && (
          <DropdownWrapper refEl={containerRef?.current || undefined}>
            <List
              sx={listStyles(dropdrownPosition(), appendToBody)}
              width={dropdrownWidth()}
              maxHeight={maxListHeight}
            >
              <Flex>
                {!!customFilter && customFilter}
                {hasSearch && (
                  <Flex flex={1} ml="20px">
                    <Box
                      mt="20px"
                      mr="-34px"
                      sx={{
                        svg: {
                          width: '14px',
                          height: '14px',

                          path: {
                            fill: 'gray',
                          },
                        },
                        zIndex: 1,
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {icons.glass}
                    </Box>
                    <Input
                      pl="32px"
                      m="10px"
                      width="100%"
                      value={search}
                      placeholder={searchPlaceholder}
                      onChange={({ target }) => setSearch(target.value)}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </Flex>
                )}
              </Flex>
              {(!!customFilter || hasSearch) && (
                <Divider my={0} width="calc(100% + 20px)" />
              )}
              {/* eslint-disable-next-line no-nested-ternary */}
              {filteredOptions.length ? (
                isMulti ? (
                  // Multi choice
                  <SelectListMulti
                    value={value}
                    onChange={onChange}
                    onClose={handleToggle}
                    options={filteredOptions}
                  />
                ) : (
                  // Single choice
                  <SelectList
                    value={value}
                    onChange={onChange}
                    onClose={handleToggle}
                    options={filteredOptions}
                  />
                )
              ) : (
                <Flex height="55px" alignItems="center" justifyContent="center">
                  <Value>{noMatchText}</Value>
                </Flex>
              )}
              {bottomActionText && (
                <Box sx={bottomActionStyles} onClick={bottomActionHandler}>
                  {bottomActionText}
                </Box>
              )}
            </List>
          </DropdownWrapper>
        )}
      </SelectLabel>
      {info && <SelectInfo intent={intent}>{info}</SelectInfo>}
    </Label>
  );
};

export default Select;
