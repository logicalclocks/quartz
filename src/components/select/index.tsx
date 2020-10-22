import React, { FC, useCallback, useRef } from 'react';

// Components
import SelectLabel from './label';
import List from '../list/container';
import Label, { LabelProps } from '../label';
// List types
import SelectList from './lists/select-list';
import SelectListMulti from './lists/select-list-multi';
// Styles
import { listStyles } from './select.styles';
// Hooks
import useDropdown from '../../utils/useDropdown';
import useOnClickOutside from '../../utils/useClickOutside';

export interface SelectProps extends Omit<LabelProps, 'onChange' | 'children'> {
  value: string[];
  options: string[];
  placeholder: string;
  isMulti?: boolean;
  label?: string;
  disabled?: boolean;
  width?: string | number;
  labelAction?: React.ReactNode;
  listWidth?: string | number;
  variant?: 'primary' | 'white';
  onChange: (value: string[]) => void;
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
  onChange,
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
        options={options}
        ref={containerRef}
      >
        {isOpen && (
          <List sx={listStyles} width={listWidth}>
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
          </List>
        )}
      </SelectLabel>
    </Label>
  );
};

export default Select;
