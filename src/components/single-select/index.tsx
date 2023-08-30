import { BoxProps, FormControl, FormLabel } from '@chakra-ui/react';
import {
  OptionBase,
  Select,
  SingleValue,
  chakraComponents,
} from 'chakra-react-select';
import * as R from 'ramda';
import { Intents } from '../intents';
import Label from '../label';

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
  labelPosition?: 'left' | 'top' | 'bottom' | 'right';

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
  labelPosition = 'top',
  ...props
}: Props) => {
  const options: SingleSelectOption[] = hasStringOptions(rawOptions)
    ? rawOptions.map((it) => ({ value: it, label: it }))
    : rawOptions;
  // Handle selection change
  const handleChange = (selectedOption: SingleValue<SingleSelectOption>) => {
    onChange(selectedOption?.value);
  };

  return (
    <FormControl
      isDisabled={disabled}
      width={width}
      display="inline-flex"
      alignItems="baseline"
      flexDirection={
        ['top', 'bottom'].includes(labelPosition) ? 'column' : 'row' // add handling
      }
      {...props}
    >
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
        // selectedOptionColorScheme="gree"
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
          } as any
        }
        // Additional customization can be added here
        // {...props}
      />
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
