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
  variant?: 'primary' | 'white';
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
  noDataMessage = 'nothing to choose',
  preventAdding = false,
  variant = 'primary',
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
      {label && (
        <FormLabel>
          <Label
            as="span"
            text={label}
            width={width}
            action={labelAction}
            sx={{
              span: {
                mb: 0,
                mr: 0,
              },
            }}
            {...props}
          />
        </FormLabel>
      )}

      <Component<Option, boolean>
        variant={variant}
        tagVariant="solid"
        size="sm"
        useBasicStyles
        menuPortalTarget={document.querySelector('.chakra-portal') as any}
        styles={{
          menuPortal: (provided) => ({ ...provided, zIndex: 200 }),
        }}
        chakraStyles={{
          menuList: R.mergeLeft({
            my: 1,
            py: 0,
          }),
          menu: R.mergeLeft({
            my: 0,
            py: 0,
          }),
          placeholder: R.mergeLeft({
            fontSize: '12px',
            color: 'gray',
          }),
          input: R.mergeLeft({
            fontSize: '12px',
          }),
          option: R.mergeLeft({
            fontSize: '12px',
          }),
          noOptionsMessage: R.mergeLeft({
            fontSize: '12px',
          }),
          multiValue: R.mergeLeft({
            bg: variant === 'white' ? 'grayShade3' : 'background',
          }),
        }}
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
    <Labeling fontSize="11px" gray>
      add
    </Labeling>
    <Box>{text}</Box>
  </HStack>
);

const isMultiOption = (option: any): option is MultiValue<Option> =>
  Array.isArray(option);

const toOption = (text: string): Option => ({ value: text, label: text });
