import React, { FC, useCallback, useMemo, useRef, useState } from 'react';

// Components
import SelectLabel from './label';
import List from '../list/container';
import Label, { LabelProps } from '../label';
import SelectInfo from './info';
// List types
import SelectList from './lists/select-list';
import SelectListMulti from './lists/select-list-multi';
// Types
import { Intents } from '../intents';
// Styles
import { listStyles, bottomActionStyles } from './select.styles';
// Hooks
import useDropdown from '../../utils/useDropdown';
import useOnClickOutside from '../../utils/useClickOutside';
import { Box, Flex } from 'rebass';
import { Divider, Input, Value } from '../../index';
import useKeyUp from '../../utils/useKeyUp';
import icons from '../../sources/icons';

export interface SelectProps extends Omit<LabelProps, 'onChange' | 'children'> {
  value: string[];
  options: string[];
  placeholder: string;
  isMulti?: boolean;
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
  swapPlaceholder?: boolean;
  hasSearch?: boolean;
  searchPlaceholder?: string;
  customFilter?: React.ReactNode;
  additionalTexts?: string[];
  additionalComponents?: React.ReactNode[];
  noMathText?: string;
  needSecondaryText?: boolean;
  deletabled?: boolean;
}

const Select: FC<SelectProps> = ({
  labelAction,
  label,
  width = '180px',
  variant = 'primary',
  options,
  disabled,
  listWidth = 'max-content',
  value,
  isMulti,
  placeholder,
  swapPlaceholder = false,
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
  ...props
}: SelectProps) => {
  const containerRef = useRef(null);
  const [isOpen, handleToggle, handleClickOutside] = useDropdown(false);
  useOnClickOutside<HTMLDivElement>(containerRef, handleClickOutside);

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
        swapPlaceholder={swapPlaceholder}
        value={value}
        isMulti={isMulti}
        noDataMessage={noDataMessage}
        additionalTexts={additionalTexts}
        options={options}
        ref={containerRef}
        needSecondaryText={needSecondaryText}
      >
        {isOpen && (
          <List sx={listStyles} width={listWidth} maxHeight={maxListHeight}>
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
            {!!filteredOptions.length ? (
              isMulti ? (
                // Multi choice
                <SelectListMulti
                  value={value}
                  onChange={onChange}
                  onClose={handleToggle}
                  options={filteredOptions}
                  additionalTexts={filteredAdditionalTexts}
                  additionalComponents={filteredAdditionalComponents}
                />
              ) : (
                // Single choice
                <SelectList
                  value={value}
                  onChange={onChange}
                  onClose={handleToggle}
                  options={filteredOptions}
                  additionalTexts={filteredAdditionalTexts}
                  additionalComponents={filteredAdditionalComponents}
                />
              )
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
        )}
      </SelectLabel>
      {info && <SelectInfo intent={intent}>{info}</SelectInfo>}
    </Label>
  );
};

export default Select;
