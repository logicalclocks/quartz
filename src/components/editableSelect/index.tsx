import { Box, FormControl, FormLabel, HStack } from '@chakra-ui/react';
import { CreatableSelect, MultiValue, OptionBase } from 'chakra-react-select';
import Label, { LabelProps } from '../label';
import Labeling from '../typography/labeling';
import { EditableSelectTypes } from './types';

export interface EditableSelectProps
  extends Omit<LabelProps, 'onChange' | 'children'> {
  label?: string; // +
  width?: string; // +
  value: string[]; // +
  options: string[]; // +
  isMulti?: boolean; // +
  inputWidth?: string; // +
  disabled?: boolean; // +
  placeholder: string; // +
  noDataMessage?: string; // +
  labelAction?: React.ReactNode; // +
  onChange: (value: string[]) => void; // +
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
        useBasicStyles
        openMenuOnFocus // needed for accessibility, e.g. trigger on a label click
        isClearable={false}
        isDisabled={disabled}
        options={options.map((it) => ({ label: it, value: it }))}
        isMulti={isMulti}
        placeholder={placeholder}
        noOptionsMessage={() => noDataMessage}
        onChange={(option) => {
          if (isMultiOption(option)) {
            onChange(option.map((it) => it.value));
          } else {
            onChange([option!.value]);
          }
        }}
        // eslint-disable-next-line react/no-unstable-nested-components
        formatCreateLabel={(text) => (
          <HStack align="baseline">
            <Labeling gray>add</Labeling>
            <Box>{text}</Box>
          </HStack>
        )}
      />
    </FormControl>
  );
};

export default EditableSelect;

const isMultiOption = (option: any): option is MultiValue<Option> =>
  Array.isArray(option);
