import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useDropdown from '../../utils/useDropdown';
import Label, { LabelProps } from '../label';
import EditableSelectContainer from './EditableSelectContainer';
import EditableSelectDropdown from './EditableSelectDropdown';
import { EditableSelectTypes, ChipsVariants } from './types';
import DropdownWrapper from '../dropdown-wrapper/DropdownWrapper';

export interface EditableSelectProps
  extends Omit<LabelProps, 'onChange' | 'children'> {
  appendToBody?: boolean;
  label?: string;
  width?: string;
  value: string[];
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

const EditableSelect = ({
  label = '',
  value,
  options,
  onChange,
  inputWidth,
  labelAction,
  placeholder,
  inlineLegend,
  appendToBody = false,
  width = 'auto',
  isMulti = true,
  type = 'editable',
  disabled = false,
  variant = 'primary',
  maxListHeight = '150px',
  noDataMessage = 'no options',
  ...props
}: EditableSelectProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState(isMulti ? '' : value[0] || '');

  const [isOpen, handleToggle, handleClickOutside] = useDropdown(false);

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
    if (containerRef.current && !isMulti) containerRef.current.focus();
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
    if (!isOpen && search !== '' && (isMulti || search !== value[0])) {
      handleToggle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const dropdrownWidth = useCallback(() => {
    if (containerRef.current) {
      return `${containerRef.current.offsetWidth - 2}px`;
    }
    return 'auto';
  }, []);

  const dropdrownPosition = useCallback(() => {
    if (containerRef.current) {
      return containerRef.current.offsetHeight + 1;
    }
    return 33;
  }, []);

  return (
    <Label
      as="span"
      text={label}
      width={width}
      action={labelAction}
      {...props}
      onClick={() => !disabled && !isOpen && handleToggle()}
    >
      <EditableSelectContainer
        ref={containerRef}
        type={type}
        label={label}
        value={value}
        search={search}
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
          <DropdownWrapper
            containerRef={containerRef}
            appendToBody={appendToBody}
            onClickOutside={handleClickOutside}
          >
            <EditableSelectDropdown
              type={type}
              value={value}
              search={search}
              isMulti={isMulti}
              onClose={handleToggle}
              width={dropdrownWidth()}
              maxHeight={maxListHeight}
              options={filteredOptions}
              appendToBody={appendToBody}
              position={dropdrownPosition()}
              onChange={handleValueChange}
            />
          </DropdownWrapper>
        )}
      </EditableSelectContainer>
    </Label>
  );
};

export default EditableSelect;
