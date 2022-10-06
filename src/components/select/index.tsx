import React, { FC, useCallback, useMemo, useRef, useState } from 'react';
// Components
import { Box, Flex } from 'rebass';
// Hooks
import useDropdown from '../../utils/useDropdown';
import useKeyUp from '../../utils/useKeyUp';
import Divider from '../divider';
import DropdownWrapper from '../dropdown-wrapper/DropdownWrapper';
import { GetIcon, IconName } from '../icon';
import Input from '../input';
// Types
import { Intents } from '../intents';
import Label, { LabelProps } from '../label';
import List from '../list/container';
import Value from '../typography/value';
import SelectInfo from './info';
import SelectLabel from './label';
// List types
import SelectList from './lists/select-list';
import SelectListMulti from './lists/select-list-multi';
// Styles
import { bottomActionStyles, listStyles } from './select.styles';

export interface SelectProps extends Omit<LabelProps, 'onChange' | 'children'> {
  value: string[];
  options: string[];
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
  onChange: (value: string[]) => void;
  noDataMessage?: string;
  bottomActionText?: string;
  bottomActionHandler?: () => void;
  hasPlaceholder?: boolean;
  hasSearch?: boolean;
  searchPlaceholder?: string;
  customFilter?: React.ReactNode;
  additionalTexts?: string[];
  additionalComponents?: React.ReactNode[];
  noMathText?: string;
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
  additionalComponents,
  additionalTexts,
  noMathText = 'No result',
  needSecondaryText = true,
  deletabled,
  needSwap = false,
  appendToBody = false,
  ...props
}: SelectProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, handleToggle, handleClickOutside] = useDropdown(false);

  const [search, setSearch] = useState('');

  const handleCloseOnEsc = useCallback(() => {
    if (isOpen) {
      handleToggle();
    }
  }, [isOpen, handleToggle]);

  useKeyUp(handleCloseOnEsc);

  const filteredOptions = useMemo(() => {
    if (!search) {
      return options;
    }

    return options.filter((value) =>
      value.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, options]);

  const filteredAdditionalTexts = useMemo(() => {
    if (!search) {
      return additionalTexts;
    }

    return additionalTexts?.filter((_, index) =>
      options[index].toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, additionalTexts, options]);

  const filteredAdditionalComponents = useMemo(() => {
    if (!search) {
      return additionalComponents;
    }

    return additionalComponents?.filter((_, index) =>
      options[index].toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, additionalComponents, options]);

  // Handlers
  const handleLabelClick = useCallback(() => {
    if (!disabled) {
      handleToggle();
      setSearch('');
    }
  }, [handleToggle, disabled]);

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

  const SelectComponent = isMulti ? SelectListMulti : SelectList;

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
        additionalTexts={additionalTexts}
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
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GetIcon color="gray" icon={IconName.glass} />
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
              {filteredOptions.length ? (
                <SelectComponent
                  value={value}
                  onChange={onChange}
                  onClose={handleToggle}
                  options={filteredOptions}
                  additionalTexts={filteredAdditionalTexts}
                  additionalComponents={filteredAdditionalComponents}
                />
              ) : (
                <Flex height="55px" alignItems="center" justifyContent="center">
                  <Value>{noMathText}</Value>
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
