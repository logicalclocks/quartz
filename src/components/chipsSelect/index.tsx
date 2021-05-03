import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { useDropdown, useOnClickOutside } from '../..';
import { Intents } from '../intents';
import Label from '../label';
import ChipsContainer from './ChipsContainer';
import ChipsDropDown from './ChipsDropdown';
import ChipsInfo from './ChipsInfo';

export interface ChipsProps {
  info?: string;
  label: string;
  value: string[];
  width?: string;
  intent?: Intents;
  options: string[];
  disabled?: boolean;
  editable?: boolean;
  placeholder: string;
  searchable?: boolean;
  noDataMessage?: string;
  variant?: 'primary' | 'white';
  labelAction?: React.ReactNode;
  onChange: (value: string[]) => void;
}

const Chips: FC<ChipsProps> = ({
  info,
  label,
  value,
  width = 'auto',
  options,
  onChange,
  intent = 'default',
  variant = 'primary',
  disabled = false,
  editable = true,
  searchable = true,
  placeholder,
  labelAction,
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
    onChange([...value, ...selection]);
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
        label={label}
        value={value}
        search={search}
        intent={intent}
        options={options}
        disabled={disabled}
        editable={editable}
        setSearch={setSearch}
        searchable={searchable}
        placeholder={placeholder}
        noDataMessage={noDataMessage}
        onChange={handleChipsSelection}
        variant={disabled ? 'disabled' : variant}
      >
        {isOpen && (
          <ChipsDropDown
            width={dropdrownWidth}
            position={dropdrownPosition}
            value={value}
            search={search}
            onClose={handleToggle}
            options={filteredOptions}
            onChange={handleValueChange}
          />
        )}
      </ChipsContainer>
      {info && <ChipsInfo intent={intent}>{info}</ChipsInfo>}
    </Label>
  );
};

export default Chips;
