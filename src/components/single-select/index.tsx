import {
  BoxProps,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Text,
  Box,
} from '@chakra-ui/react';
import {
  OptionBase,
  Select,
  chakraComponents,
  type SingleValue as ISingleValue,
} from 'chakra-react-select';
import * as R from 'ramda';
import { Intents } from '../intents';
import Label from '../label';
import { ReactNode } from 'react';

export interface Props
  extends Omit<BoxProps, 'onChange' | 'children' | 'className'> {
  value: SingleSelectOption['value'];
  options: SingleSelectOption[] | string[];
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  width?: string | number;
  maxListHeight?: string;
  labelAction?: React.ReactNode;
  /** @deprecated not used meaningfully anywhere */
  listWidth?: string | number; // deprecate
  onChange: (value: SingleSelectOption['value']) => void;
  variant?: 'primary' | 'white';
  noDataMessage?: string;
  isClearable?: boolean; // just show X or not
  labelPosition?: 'side' | 'inline' | 'outside';
  labelPlacement?: 'default' | 'inverted';

  isInvalid?: boolean;
  errorMessage?: ReactNode;

  // out of scope rn
  intent?: Intents;
  customFilter?: React.ReactNode;
  bottomActionText?: string;
  bottomActionHandler?: () => void;
  additionalTexts?: string[];
  additionalComponents?: React.ReactNode[];
  needSwap?: boolean;
}

export interface SingleSelectOption extends OptionBase {
  label: string;
  value: string | number | undefined; // TODO do we need number?
  additionalText?: string;
  additionalComponent?: React.ReactNode;
}

const MenuList = ({ children, ...props }: any) => {
  return (
    <chakraComponents.MenuList {...props} background="red">
      {props.selectProps.customFilter}
      {children} {/* This renders the options */}
    </chakraComponents.MenuList>
  );
};

const SingleValue = ({ children, ...props }: any) => {
  console.log(props.selectProps);
  return (
    <chakraComponents.SingleValue {...props} background="red">
      <HStack
        w="max-content"
        align="stretch"
        direction={
          props.selectProps.labelPlacement === 'inverted'
            ? 'column-reverse'
            : 'column'
        }
      >
        {props.selectProps.labelPosition === 'inline' && (
          <Text fontWeight="normal" color="gray" mr="0.5ch">
            {props.selectProps.label}
          </Text>
        )}
        <Box>
          {children} {/* This renders the options */}
        </Box>
      </HStack>
    </chakraComponents.SingleValue>
  );
};

const hasStringOptions = (
  it: (string | SingleSelectOption)[],
): it is string[] => typeof it[0] === 'string';

export const SingleSelect = ({
  options: rawOptions,
  value,
  onChange,
  placeholder,
  disabled,
  label,
  labelAction,
  width,
  maxListHeight,
  variant,
  noDataMessage,
  isClearable = false,
  labelPosition = 'outside',
  labelPlacement = 'inverted',
  isInvalid = false,
  errorMessage = '',
  ...props
}: Props) => {
  const options: SingleSelectOption[] = hasStringOptions(rawOptions)
    ? rawOptions.map((it) => ({ value: it, label: it }))
    : rawOptions;
  // Handle selection change
  const handleChange = (selectedOption: ISingleValue<SingleSelectOption>) => {
    onChange(selectedOption?.value);
  };

  let xxx = 'column';
  if (labelPosition !== 'inline') {
    const flexDirection = labelPosition === 'side' ? 'row' : 'column';
    xxx =
      labelPlacement === 'inverted'
        ? flexDirection + '-reverse'
        : flexDirection;
  }

  return (
    <FormControl
      isDisabled={disabled}
      width={width}
      display="flex"
      alignItems="baseline"
      justifyContent="start"
      flexDirection={xxx as any}
      gap={1}
      isInvalid={isInvalid}
      {...props}
    >
      {['outside', 'side'].includes(labelPosition) && label && (
        <FormLabel>
          <Label
            as="span"
            text={label}
            action={labelAction}
            m={0}
            sx={{
              span: {
                mb: 0,
                mr: 0,
              },
            }}
          />
        </FormLabel>
      )}
      <Select<SingleSelectOption>
        isMulti={false}
        variant={variant}
        useBasicStyles
        isClearable={isClearable}
        // menuIsOpen
        size="sm"
        options={options}
        placeholder={placeholder}
        value={options.find((it) => it.value === value)}
        onChange={handleChange}
        selectedOptionColorScheme="green"
        closeMenuOnSelect
        noOptionsMessage={R.always(noDataMessage)}
        menuPortalTarget={document.querySelector('.chakra-portal') as any}
        styles={{
          menuPortal: (provided) => ({ ...provided, zIndex: 2000 }),
        }}
        chakraStyles={{
          ...chakraStyles,
          container: R.mergeLeft({
            width,
          }),
          menuList: R.mergeLeft({
            my: 1,
            py: 0,
            maxHeight: maxListHeight,
          }),
        }}
        components={
          {
            MenuList,
            SingleValue,
          } as any
        }
        // Additional customization can be added here
        // {...props}
        label={label}
        labelPosition={labelPosition}
      />
      {errorMessage && (
        <FormErrorMessage m={0} fontSize="12px">
          {errorMessage}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

const chakraStyles = {
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
  menu: R.mergeLeft({
    my: 0,
    py: 0,
  }),
};
