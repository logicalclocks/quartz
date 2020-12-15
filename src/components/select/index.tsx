import React, { FC, useCallback, useRef } from 'react';

// Components
import SelectLabel from './label';
import List from '../list/container';
import Label, { LabelProps } from '../label';
// List types
import SelectList from './lists/select-list';
import SelectListMulti from './lists/select-list-multi';
// Styles
import { listStyles, bottomActionStyles } from './select.styles';
// Hooks
import useDropdown from '../../utils/useDropdown';
import useOnClickOutside from '../../utils/useClickOutside';
import { Box } from 'rebass';

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
  onChange: (value: string[]) => void;
  noDataMessage?: string;
  bottomActionText?: string;
  bottomActionHandler?: () => void;
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
  onChange,
  bottomActionHandler,
  bottomActionText,
  ...props
}: SelectProps) => {
  const containerRef = useRef(null);
  const [isOpen, handleToggle, handleClickOutside] = useDropdown(false);
  useOnClickOutside<HTMLDivElement>(containerRef, handleClickOutside);

  // Handlers
  const handleLabelClick = useCallback(() => {
    if (!disabled) {
      handleToggle();
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
            {isMulti ? (
              // Multi choice
              <SelectListMulti
                options={options}
                value={value}
                onChange={onChange}
              />
            ) : (
              // Single choice
              <SelectList options={options} value={value} onChange={onChange} />
            )}
            {bottomActionText && (
              <Box sx={bottomActionStyles} onClick={bottomActionHandler}>
                {bottomActionText}
              </Box>
            )}
          </List>
        )}
      </SelectLabel>
    </Label>
  );
};

export default Select;
