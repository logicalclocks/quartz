import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { useDropdown, useOnClickOutside } from '../..';
import { Intents } from '../intents';
import Label from '../label';
import ChipsContainer from './ChipsContainer';
import ChipsDropDown from './ChipsDropdown';
import ChipsInfo from './ChipsInfo';
import { ChipsSelectTypes, ChipsVariants } from './types';

export interface ChipsProps {
  info?: string;
  label: string;
  width?: string;
  value: string[];
  intent?: Intents;
  options: string[];
  isMulti?: boolean;
  disabled?: boolean;
  placeholder: string;
  noDataMessage?: string;
  variant?: ChipsVariants;
  labelAction?: React.ReactNode;
  type?: ChipsSelectTypes;
  onChange: (value: string[]) => void;
}

const Chips: FC<ChipsProps> = ({
  info,
  label,
  value,
  options,
  onChange,
  labelAction,
  placeholder,
  width = 'auto',
  isMulti = true,
  type = 'editable',
  disabled = false,
  intent = 'default',
  variant = 'editable',
  noDataMessage = 'no options',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState('');

  const [isOpen, handleToggle, handleClickOutside] = useDropdown(false);
  useOnClickOutside<HTMLDivElement>(containerRef, handleClickOutside);

  const filteredOptions = useMemo(() => {
    const nonSelected = options.filter((opt) => !value.includes(opt));
    const matchingSearch = nonSelected.filter((opt) => opt.includes(search));
    return matchingSearch;
  }, [search, options, value]);

  const handleValueChange = (selection: string[]) => {
    setSearch('');
    const newValue = isMulti ? [...value, ...selection] : selection;
    onChange(newValue);
  };

  const handleChipsSelection = (selection: string[]) => {
    if (isOpen) handleToggle();
    onChange(selection);
  };

  useEffect(() => {
    // Reopen dropdrown when typing after adding chip.
    if (!isOpen && search !== '') handleToggle();
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
      onClick={() => !disabled && handleToggle()}
    >
      <ChipsContainer
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
        placeholder={placeholder}
        noDataMessage={noDataMessage}
        onChange={handleChipsSelection}
        variant={disabled ? 'disabled' : (variant as ChipsVariants)}
      >
        {isOpen && (
          <ChipsDropDown
            type={type}
            value={value}
            search={search}
            onClose={handleToggle}
            width={dropdrownWidth}
            options={filteredOptions}
            position={dropdrownPosition}
            onChange={handleValueChange}
          />
        )}
      </ChipsContainer>
      {info && <ChipsInfo intent={intent}>{info}</ChipsInfo>}
    </Label>
  );
};

export default Chips;
