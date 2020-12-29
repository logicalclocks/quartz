import React, { FC, useCallback, useRef } from 'react';

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
  maxListHeight?: string;
  labelAction?: React.ReactNode;
  listWidth?: string | number;
  variant?: 'primary' | 'white';
  info?: string;
  intent?: Intents;
  onChange: (value: string[]) => void;
  noDataMessage?: string;
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
      {info && <SelectInfo intent={intent}>{info}</SelectInfo>}
    </Label>
  );
};

export default Select;
