import { Box, FormControl, FormLabel, HStack } from '@chakra-ui/react';
import { CreatableSelect } from 'chakra-react-select';
import Label, { LabelProps } from '../label';
import Labeling from '../typography/labeling';
import { EditableSelectTypes } from './types';

export interface EditableSelectProps
  extends Omit<LabelProps, 'onChange' | 'children'> {
  appendToBody?: boolean; // -
  label?: string; // +
  width?: string; // +
  value: string[]; // +
  options: string[]; // +
  isMulti?: boolean; // +
  inputWidth?: string; // +
  disabled?: boolean; // +
  placeholder: string; // +
  inlineLegend?: string; // -
  noDataMessage?: string; // +
  type?: EditableSelectTypes; // -
  labelAction?: React.ReactNode; // +
  onChange: (value: string[]) => void; // +
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
  width = 'auto',
  isMulti = true,
  type = 'editable',
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

      <CreatableSelect
        useBasicStyles
        isDisabled={disabled}
        options={options.map((it) => ({ label: it, value: it }))}
        isMulti={isMulti}
        openMenuOnFocus
        placeholder={placeholder}
        noOptionsMessage={() => noDataMessage}
        onChange={(option: any) => {
          onChange(option.map((it) => it.value));
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
