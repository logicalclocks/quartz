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
import Tooltip from '../tooltip';
// List types
import SelectList from './lists/select-list';
import SelectListMulti from './lists/select-list-multi';
// Types
import { Intents } from '../intents';
import { SelectFormat, SelectOpt } from './types';
// Styles
import { listStyles, bottomActionStyles } from './select.styles';
// Hooks
import useDropdown from '../../utils/useDropdown';
import { GetIcon, IconName } from '../icon';
import DropdownWrapper from '../dropdown-wrapper/DropdownWrapper';

export interface SelectProps
  extends Omit<LabelProps, 'onChange' | 'children' | 'value'> {
  // Value of the select. Needs to match one of the keys of the options.
  // Array if isMulti
  value: (string | number) | (string | number)[];
  // Options to be passed. Check the interface to see the available fields.
  options: SelectOpt[];
  // How the Select and dropdown should behave in terms of width.
  // [fit]: max dropdown content width
  // [fill]: fill container
  format?: 'fit' | 'fill';
  // Placeholder for the select box
  placeholder: string;
  // Whether it allows multiple selection.
  isMulti?: boolean;
  // Appends the dropdown directly into the body. Useful when inside popups,
  appendToBody?: boolean;
  // Label for the select
  label?: string;
  // Placement of the label
  labelMode?: 'default' | 'inline' | 'none';
  // Disable selection
  disabled?: boolean;
  maxListHeight?: string;
  labelAction?: React.ReactNode;
  color?: 'primary' | 'white';
  message?: string;
  state?: Intents;
  onChange: (value: SelectOpt | SelectOpt[]) => void;
  noDataMessage?: string;
  bottomActionText?: string;
  bottomActionHandler?: () => void;
  hasSearch?: boolean;
  searchPlaceholder?: string;
  customFilter?: React.ReactNode;
  noMatchText?: string;
  needSecondaryText?: boolean;
  deletabled?: boolean;
  needSwap?: boolean;
  info?: string;
}

const Select: FC<SelectProps> = ({
  label,
  value,
  options,
  isMulti,
  info,
  message,
  disabled,
  onChange,
  deletabled,
  placeholder,
  labelAction,
  customFilter,
  noDataMessage,
  format = 'fit',
  bottomActionText,
  needSwap = false,
  color = 'primary',
  hasSearch = false,
  state = 'default',
  bottomActionHandler,
  appendToBody = false,
  labelMode = 'default',
  maxListHeight = '150px',
  needSecondaryText = true,
  noMatchText = 'No result',
  searchPlaceholder = 'Find...',
  ...props
}: SelectProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, handleToggle, handleClickOutside] = useDropdown(false);

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
      if (!isOpen) handleToggle();
      setSearch('');
    }
  }, [handleToggle, disabled, isOpen]);

  const dropdrownPosition = useCallback(() => {
    if (containerRef?.current) {
      return containerRef.current.offsetHeight + 1;
    }
    return 33;
  }, []);

  const dropdrownWidth = useCallback(() => {
    if (
      // eslint-disable-next-line operator-linebreak
      (format as SelectFormat) === SelectFormat.fill &&
      containerRef.current
    ) {
      return `${containerRef.current.offsetWidth - 2}px`;
    }
    return 'max-content';
  }, [format]);

  const selectWidth = useCallback(() => {
    if ((format as SelectFormat) === SelectFormat.fit) return 'max-content';
    return 'inherit';
  }, [format]);

  const labelActions = useMemo(() => {
    if (!labelAction) {
      return null;
    }

    if (info && info !== '') {
      return (
        <Flex
          mr="-8px"
          flexGrow={1}
          flexDirection="row"
          justifyContent="space-between"
        >
          <Tooltip mainText={info}>
            <GetIcon mx="5px" mt="3px" size="xs" icon={IconName.info_block} />
          </Tooltip>
          {labelAction}
        </Flex>
      );
    }
    return (
      <Flex
        mr="-8px"
        flexDirection="row"
        justifyContent="flex-end"
        flexGrow={1}
      >
        {labelAction}
      </Flex>
    );
  }, [labelAction, info]);

  const arrayValue = useMemo(() => {
    if (Array.isArray(value)) return value;
    return value !== undefined && value !== '' ? [value] : [];
  }, [value]);

  const selectedOption = useMemo(() => {
    const mapped = arrayValue
      .map((val) => options.find((x) => x.key === val))
      .filter((x) => x);
    return mapped as SelectOpt[];
  }, [arrayValue, options]);

  return (
    <Label
      action={labelActions}
      text={labelMode === 'default' ? label : ''}
      width={selectWidth()}
      {...props}
      as="span"
      onClick={handleLabelClick}
    >
      <SelectLabel
        label={labelMode === 'inline' ? label : ''}
        deletabled={deletabled}
        intent={state}
        onChange={onChange}
        variant={disabled ? 'disabled' : color}
        placeholder={placeholder}
        value={selectedOption}
        isMulti={isMulti}
        noDataMessage={noDataMessage}
        options={options}
        ref={containerRef}
        needSecondaryText={needSecondaryText}
        needSwap={needSwap}
      >
        {isOpen && (
          <DropdownWrapper
            containerRef={containerRef}
            appendToBody={appendToBody}
            onClickOutside={handleClickOutside}
          >
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
                    >
                      <GetIcon size="md" color="gray" icon={IconName.glass} />
                    </Box>
                    <Input
                      pl="32px"
                      m="10px"
                      width="100%"
                      value={search}
                      placeholder={searchPlaceholder}
                      onChange={({ target }) => setSearch(target.value)}
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
                    value={selectedOption}
                    onChange={onChange}
                    onClose={handleToggle}
                    options={filteredOptions}
                  />
                ) : (
                  // Single choice
                  <SelectList
                    value={selectedOption}
                    onChange={(option) => {
                      handleToggle();
                      onChange(option);
                    }}
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
      {message && <SelectInfo intent={state}>{message}</SelectInfo>}
    </Label>
  );
};

export default Select;
