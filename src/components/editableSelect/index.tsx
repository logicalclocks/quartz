import { Box, FormControl, FormLabel, HStack } from '@chakra-ui/react';
import {
  CreatableSelect,
  MultiValue,
  OnChangeValue,
  OptionBase,
  Select,
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
  preventAdding?: boolean;
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
  preventAdding = false,
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

  const Component = preventAdding ? Select : CreatableSelect;
  const propsForCreatable = preventAdding
    ? {}
    : {
        formatCreateLabel: CreateLabel,
      };

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

      <Component<Option, boolean>
        size="sm"
        closeMenuOnSelect={false}
        openMenuOnFocus // needed for accessibility, e.g. trigger on a label click
        isClearable={false} // removes clear button [X] that clears the whole select
        options={options}
        value={isMulti ? value.map(toOption) : toOption(value[0])}
        selectedOptionColorScheme="gray"
        onChange={handleChange}
        noOptionsMessage={R.always(noDataMessage)}
        placeholder={placeholder}
        isMulti={isMulti}
        isDisabled={disabled}
        {...propsForCreatable}
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
