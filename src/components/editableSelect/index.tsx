import { Box, FormControl, FormLabel, HStack } from '@chakra-ui/react';
import {
  CreatableSelect,
  MultiValue,
  OnChangeValue,
  OptionBase,
} from 'chakra-react-select';
import * as R from 'ramda';
import { useCallback, useMemo } from 'react';
import Label, { LabelProps } from '../label';
import Labeling from '../typography/labeling';

export interface EditableSelectProps
  extends Omit<LabelProps, 'onChange' | 'children'> {
  label?: string;
  width?: string;
  value: string[];
  options: string[];
  isMulti?: boolean;
  disabled?: boolean;
  placeholder: string;
  noDataMessage?: string;
  labelAction?: React.ReactNode;
  onChange: (value: string[]) => void;
}

interface Option extends OptionBase {
  label: string;
  value: string;
}

const EditableSelect = ({
  label = '',
  value,
  options: optionsAsStrings,
  onChange,
  labelAction,
  placeholder,
  width = 'auto',
  isMulti = true,
  disabled = false,
  noDataMessage = 'no options',
  ...props
}: EditableSelectProps) => {
  const options = useMemo<Option[]>(
    () => optionsAsStrings.map(toOption),
    [optionsAsStrings],
  );

  const handleChange = useCallback(
    (option: OnChangeValue<Option, boolean>) => {
      if (isMultiOption(option)) {
        onChange(option.map((it) => it.value));
      } else {
        onChange([option!.value]);
      }
    },
    [onChange],
  );

  console.log(value.map(toOption));
  console.log(value);

  return (
    <FormControl isDisabled={disabled}>
      <FormLabel>
        <Label
          as="span"
          text={label}
          width={width}
          action={labelAction}
          {...props}
        />
      </FormLabel>

      <CreatableSelect<Option, boolean>
        size="sm"
        openMenuOnFocus // needed for accessibility, e.g. trigger on a label click
        isClearable={false} // removes clear button [X] that clears the whole select
        options={options}
        value={isMulti ? value.map(toOption) : toOption(value[0])}
        onChange={handleChange}
        formatCreateLabel={CreateLabel}
        noOptionsMessage={R.always(noDataMessage)}
        placeholder={placeholder}
        isMulti={isMulti}
        isDisabled={disabled}
      />
    </FormControl>
  );
};

export default EditableSelect;

const CreateLabel = (text: string) => (
  <HStack align="baseline">
    <Labeling gray>add</Labeling>
    <Box>{text}</Box>
  </HStack>
);

const isMultiOption = (option: any): option is MultiValue<Option> =>
  Array.isArray(option);

const toOption = (text: string): Option => ({ value: text, label: text });
