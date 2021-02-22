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
import { Divider, Input } from '../../index';
import useKeyUp from '../../utils/useKeyUp';

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
  hasSearch?: boolean;
  searchPlaceholder: string;
  customFilter?: React.ReactNode;
  additionalTexts?: string[];
  additionalComponents?: React.ReactNode[];
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
        hasPlaceholder={hasPlaceholder}
        intent={intent}
        variant={disabled ? 'disabled' : variant}
        placeholder={placeholder}
        value={value}
        isMulti={isMulti}
        noDataMessage={noDataMessage}
        options={options}
        ref={containerRef}
      >
        {isOpen && (
          <List sx={listStyles} width={listWidth} maxHeight={maxListHeight}>
            <Flex>
              {!!customFilter && customFilter}
              {hasSearch && (
                <Box
                  flex={1}
                  mr="20px"
                  sx={{
                    svg: {
                      mt: '10px',
                      ml: '8px',
                    },
                  }}
                >
                  <Input
                    m="10px"
                    width="100%"
                    icon="search"
                    value={search}
                    placeholder={searchPlaceholder}
                    onChange={({ target }) => setSearch(target.value)}
                    onClick={(e) => e.stopPropagation()}
                  />
                </Box>
              )}
            </Flex>
            {(!!customFilter || hasSearch) && (
              <Divider my={0} width="calc(100% + 20px)" />
            )}
            {isMulti ? (
              // Multi choice
              <SelectListMulti
                value={value}
                onChange={onChange}
                onClose={handleToggle}
                options={filteredOptions}
                additionalTexts={additionalTexts}
                additionalComponents={additionalComponents}
              />
            ) : (
              // Single choice
              <SelectList
                value={value}
                onChange={onChange}
                onClose={handleToggle}
                options={filteredOptions}
                additionalTexts={additionalTexts}
                additionalComponents={additionalComponents}
              />
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
