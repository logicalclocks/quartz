import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { useDropdown, useOnClickOutside } from '../..';
import { Intents } from '../intents';
import Label, { LabelProps } from '../label';
import EditableSelectContainer from './EditableSelectContainer';
import EditableSelectDropdown from './EditableSelectDropdown';
import EditableSelectInfo from './EditableSelectInfo';
import { EditableSelectTypes, ChipsVariants } from './types';

export interface EditableSelectProps
  extends Omit<LabelProps, 'onChange' | 'children'> {
  info?: string;
  label?: string;
  width?: string;
  value: string[];
  intent?: Intents;
  options: string[];
  isMulti?: boolean;
  inputWidth?: string;
  disabled?: boolean;
  placeholder: string;
  inlineLegend?: string;
  noDataMessage?: string;
  maxListHeight?: string;
  type?: EditableSelectTypes;
  variant?: ChipsVariants;
  labelAction?: React.ReactNode;
  onChange: (value: string[]) => void;
}

const EditableSelect: FC<EditableSelectProps> = ({
  info,
  label = '',
  value,
  options,
  onChange,
  inputWidth,
  labelAction,
  placeholder,
  inlineLegend,
  width = 'auto',
  isMulti = true,
  type = 'editable',
  disabled = false,
  intent = 'default',
  variant = 'editable',
  maxListHeight = '150px',
  noDataMessage = 'no options',
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState(isMulti ? '' : value[0] || '');

  const [isOpen, handleToggle, handleClickOutside] = useDropdown(false);
  useOnClickOutside<HTMLDivElement>(containerRef, handleClickOutside);

  const unselectedOpts = useMemo(
    () => options.filter((opt) => !value.includes(opt)),
    [options, value],
  );

  const filteredOptions = useMemo(() => {
    const baseOptions = isMulti ? unselectedOpts : options;
    const matching = baseOptions.filter((opt) => opt.includes(search));
    if (!isMulti && value[0] && !options.includes(value[0])) {
      // For single section display current search as option.
      return [value[0], ...matching];
    }
    return matching;
  }, [search, options, value, isMulti, unselectedOpts]);

  const handleValueChange = (selection: string[]) => {
    // Remove focus from input
    if (containerRef.current) containerRef.current.focus();
    setSearch(isMulti ? '' : selection[0]);
    const newValue = isMulti ? [...value, ...selection] : selection;
    onChange(newValue);
  };

  const handleChipsSelection = (selection: string[]) => {
    if (isOpen) handleToggle();
    onChange(selection);
  };

  useEffect(() => {
    // Reopen dropdrown when typing.
    if (!isOpen && search !== '') {
      if (isMulti || search !== value[0]) handleToggle();
    }
  }, [search]);

  const dropdrownWidth = useMemo(() => {
    if (containerRef.current) {
      return `${containerRef.current.offsetWidth - 2}px`;
    }
    return 'auto';
  }, [containerRef.current?.offsetWidth]);

  const dropdrownPosition = useMemo(() => {
    if (containerRef.current) {
      return containerRef.current.offsetHeight + 1;
    }
    return 33;
  }, [containerRef.current?.offsetHeight]);

  return (
    <Label
      as="span"
      text={label}
      width={width}
      action={labelAction}
      {...props}
      onClick={() => !disabled && handleToggle()}
    >
      <EditableSelectContainer
        ref={containerRef}
        type={type}
        label={label}
        value={value}
        search={search}
        intent={intent}
        isMulti={isMulti}
        options={options}
        disabled={disabled}
        setSearch={setSearch}
        inputWidth={inputWidth}
        placeholder={placeholder}
        noDataMessage={noDataMessage}
        onChange={handleChipsSelection}
        inlineLegend={inlineLegend}
        variant={disabled ? 'disabled' : (variant as ChipsVariants)}
      >
        {isOpen && (
          <EditableSelectDropdown
            type={type}
            value={value}
            search={search}
            isMulti={isMulti}
            onClose={handleToggle}
            width={dropdrownWidth}
            maxHeight={maxListHeight}
            options={filteredOptions}
            position={dropdrownPosition}
            onChange={handleValueChange}
          />
        )}
      </EditableSelectContainer>
      {info && <EditableSelectInfo intent={intent}>{info}</EditableSelectInfo>}
    </Label>
  );
};

export default EditableSelect;
