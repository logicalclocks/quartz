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
  inputWidth?: string;
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
  options,
  onChange,
  inputWidth,
  labelAction,
  placeholder,
  width = 'auto',
  isMulti = true,
  disabled = false,
  noDataMessage = 'no options',
  ...props
}: EditableSelectProps) => {
  const preparedOptions = useMemo<Option[]>(
    () => options.map((option) => ({ label: option, value: option })),
    [options],
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
        options={preparedOptions}
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

const isMultiOption = (option: any): option is MultiValue<Option> =>
  Array.isArray(option);

const CreateLabel = (text: string) => (
  <HStack align="baseline">
    <Labeling gray>add</Labeling>
    <Box>{text}</Box>
  </HStack>
);
