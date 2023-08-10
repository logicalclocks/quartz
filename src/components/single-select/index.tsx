import { FormControl, FormLabel, Box, Text } from '@chakra-ui/react';
import {
  OptionBase,
  Select,
  Props as SelectProps,
  SingleValue,
  chakraComponents,
} from 'chakra-react-select';
import { useMemo } from 'react';
import * as R from 'ramda';
import { Intents } from '../intents';
import Label from '../label';

export interface Props
  extends Omit<SelectProps, 'onChange' | 'children' | 'className'> {
  value: string[];
  options: string[];
  placeholder: string;
  label?: string;
  disabled?: boolean;
  width?: string | number;
  maxListHeight?: string;
  labelAction?: React.ReactNode;
  listWidth?: string | number;
  variant?: 'primary' | 'white';
  info?: string;
  intent?: Intents;
  onChange: (value: string[]) => void;
  noDataMessage?: string;
  bottomActionText?: string;
  bottomActionHandler?: () => void;
  hasPlaceholder?: boolean;
  hasSearch?: boolean;
  searchPlaceholder?: string;
  customFilter?: React.ReactNode;
  additionalTexts?: string[];
  additionalComponents?: React.ReactNode[];
  noMathText?: string; // -
  needSecondaryText?: boolean; // -
  deletabled?: boolean; // just show X or not
  needSwap?: boolean;
}

interface Option extends OptionBase {
  label: string;
  value: string;
}

const MenuList = ({ children, ...props }: any) => {
  const handleInputChange = (event: any) => {};

  console.log(props);
  return (
    <chakraComponents.MenuList {...props}>
      <Box py={2}>{props.selectProps.customFilter}</Box>
      {children} {/* This renders the options */}
    </chakraComponents.MenuList>
  );
};

const SingleSelect = ({
  options: optionsAsStrings,
  value,
  onChange,
  placeholder,
  additionalTexts,
  additionalComponents,
  disabled,
  label,
  labelAction,
  ...props
}: Props) => {
  const options = useMemo<Option[]>(
    () => optionsAsStrings.map(toOption),
    [optionsAsStrings],
  );

  // Handle selection change
  const handleChange = (selectedOption: SingleValue<Option>) => {
    onChange(selectedOption ? [selectedOption.value] : []);
  };

  return (
    <FormControl isDisabled={disabled}>
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
      <Select<Option>
        size="sm"
        options={options}
        placeholder={placeholder}
        value={toOption(value[0])}
        onChange={handleChange}
        chakraStyles={chakraStyles}
        components={{
          MenuList,
        }}
        {...props}
        // Additional customization can be added here
        // {...props}
      />
    </FormControl>
  );
};

export default SingleSelect;
const toOption = (text: string): Option => ({ value: text, label: text });
const chakraStyles = {
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
  // multiValue: R.mergeLeft({
  //   bg: variant === 'white' ? 'grayShade3' : 'background',
  // }),
};
