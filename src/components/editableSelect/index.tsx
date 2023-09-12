import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
} from '@chakra-ui/react';
import {
  CreatableSelect,
  MultiValue,
  OnChangeValue,
  OptionBase,
  Select,
  CreatableProps,
} from 'chakra-react-select';
import * as R from 'ramda';
import { useCallback, useMemo } from 'react';
import Label from '../label';
import Labeling from '../typography/labeling';

export interface EditableSelectProps
  extends Omit<CreatableProps<Option, boolean, any>, 'onChange' | 'value'> {
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
  errorMessage?: string;
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
  isMulti = true,
  disabled = false,
  noDataMessage,
  preventAdding = false,
  variant = 'primary',
  isInvalid,
  errorMessage = '',
  ...props
}: EditableSelectProps) => {
  const isSingle = !isMulti;
  const options = useMemo<Option[]>(
    () => optionsAsStrings.map(toOption),
    [optionsAsStrings],
  );

  const handleChange = useCallback(
    (option: OnChangeValue<Option, boolean>) => {
      R.cond<any, void>([
        [R.isNil, () => onChange([])],
        [isMultiOption, (opt: Option[]) => onChange(opt.map((it) => it.value))],
        [R.T, (opt: Option) => onChange([opt.value])],
      ])(option);
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
    <FormControl isDisabled={disabled} isInvalid={isInvalid}>
      {label && (
        <FormLabel>
          <Label
            as="span"
            text={label}
            action={labelAction}
            sx={{
              span: {
                mb: 0,
                mr: 0,
              },
            }}
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
          menuPortal: (provided) => ({ ...provided, zIndex: 2000 }),
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
          singleValue: R.mergeLeft({
            fontSize: '12px',
          }),
          multiValue: R.mergeLeft({
            bg: variant === 'white' ? 'grayShade3' : 'background',
          }),
        }}
        closeMenuOnSelect={isSingle}
        isClearable={isSingle} // removes clear button [X] that clears the whole select
        openMenuOnFocus // needed for accessibility, e.g. trigger on a label click
        options={options}
        value={R.cond<any, Option | Option[] | undefined>([
          [R.either(R.isNil, R.isEmpty), R.always(undefined)],
          [R.always(isMulti), R.map(toOption)],
          [R.T, R.pipe(R.head, toOption)],
        ])(value)}
        onChange={handleChange}
        selectedOptionColorScheme="gray"
        noOptionsMessage={R.always(
          isNotEmptyAndNotUndefined(noDataMessage) ? noDataMessage! : '— • —',
        )}
        isDisabled={disabled}
        isMulti={isMulti}
        {...props}
        {...propsForCreatable}
      />
      {errorMessage && (
        <FormErrorMessage fontSize="12px">{errorMessage}</FormErrorMessage>
      )}
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
const isNotEmptyAndNotUndefined = R.both(
  R.complement(R.isNil),
  R.complement(R.isEmpty),
);
