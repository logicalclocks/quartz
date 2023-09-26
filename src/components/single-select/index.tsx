import {
  Box,
  BoxProps,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Text,
} from '@chakra-ui/react';
import {
  OptionBase,
  Props as PublicBaseSelectProps,
  Select,
  CreatableSelect,
  chakraComponents,
  type SingleValue as ISingleValue,
} from 'chakra-react-select';
import * as R from 'ramda';
import { ReactNode } from 'react';
import { Intents } from '../intents';
import Label from '../label';
import Labeling from '../typography/labeling';

export interface SingleSelectOption extends OptionBase {
  label: string;
  value: string | undefined;
  additionalText?: string;
  additionalComponent?: React.ReactNode;
}

type ParentProps = Pick<PublicBaseSelectProps, 'menuPlacement'>;
type CleanBoxProps = Omit<
  BoxProps,
  'onChange' | 'children' | 'className' | 'defaultValue'
>;

type Conditionals =
  | {
      isClearable?: true | undefined;
      onChange: (value: string | undefined) => void;
    }
  | {
      isClearable?: false;
      onChange: (value: string) => void;
    };

export type Props = ParentProps &
  CleanBoxProps &
  Conditionals & {
    editable?: boolean;
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
    variant?: 'primary' | 'white';
    noDataMessage?: string;
    isClearable?: boolean; // just show X or not
    labelPosition?: 'side' | 'inline' | 'outside';
    invertLabelPosition?: boolean;
    isInvalid?: boolean;
    errorMessage?: ReactNode;

    // out of scope rn
    intent?: Intents;
    customFilter?: React.ReactNode;
    bottomActionText?: string;
    bottomActionHandler?: () => void;
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
  editable = false,
  isClearable = false,
  labelPosition = 'outside',
  invertLabelPosition = false,
  isInvalid,
  errorMessage = '',
  menuPlacement,
  ...props
}: Props) => {
  const options: SingleSelectOption[] = hasStringOptions(rawOptions)
    ? rawOptions.map((it) => ({ value: it, label: it }))
    : rawOptions;

  const handleChange = (selectedOption: ISingleValue<SingleSelectOption>) => {
    onChange(selectedOption?.value as string);
  };

  const labelProps: Pick<
    Props,
    'invertLabelPosition' | 'labelPosition' | 'label'
  > = {
    labelPosition,
    invertLabelPosition,
    label,
  };

  let flexDirection: BoxProps['flexDirection'] = 'column';
  if (labelPosition === 'side') {
    flexDirection = `row${invertLabelPosition ? '-reverse' : ''}`;
  }

  const Component = editable ? CreatableSelect : Select;

  const propsForEditable = editable
    ? {
        formatCreateLabel: CreateLabel,
      }
    : {};

  return (
    <FormControl
      isDisabled={disabled}
      width={width}
      display="flex"
      alignItems="baseline"
      justifyContent="start"
      flexDirection={flexDirection}
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
      <Component<SingleSelectOption>
        isMulti={false}
        variant={variant}
        tagVariant="solid"
        useBasicStyles
        isClearable={isClearable}
        size="sm"
        openMenuOnFocus // needed for accessibility, e.g. trigger on a label click
        options={options}
        placeholder={
          label && labelPosition === 'inline'
            ? `${label} ${placeholder ?? ''}`
            : placeholder
        }
        value={options.find((it) => it.value === value)}
        onChange={handleChange}
        selectedOptionColorScheme="gray"
        closeMenuOnSelect
        noOptionsMessage={R.always(
          isNotEmptyAndNotUndefined(noDataMessage) ? noDataMessage! : '— • —',
        )}
        menuPortalTarget={document.querySelector('.chakra-portal') as any}
        menuShouldBlockScroll
        styles={{
          menuPortal: (provided) => ({ ...provided, zIndex: 2000 }),
        }}
        menuPlacement={menuPlacement ?? 'auto'}
        chakraStyles={{
          ...chakraStyles,
          container: R.mergeLeft({
            width,
          }),
          menuList: R.mergeLeft({
            my: 1,
            py: 0,
            maxHeight: maxListHeight,
            width: 'max-content',
          }),
          multiValue: R.mergeLeft({
            bg: variant === 'white' ? 'grayShade3' : 'background',
          }),
        }}
        components={
          {
            MenuList,
            SingleValue,
            Option,
          } as any
        }
        // Additional customization can be added here
        // {...props}
        {...labelProps}
        {...propsForEditable}
      />
      {errorMessage && (
        <FormErrorMessage m={1} fontSize="12px">
          {errorMessage}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

//

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
  menu: R.mergeLeft({
    my: 0,
    py: 0,
  }),
  menuList: R.mergeLeft({
    my: 1,
    py: 0,
  }),
};

const SingleValue = ({ children, ...props }: any) => {
  return (
    <chakraComponents.SingleValue {...props}>
      <Flex
        align="stretch"
        w="max-content"
        gap={1}
        direction={
          props.selectProps?.invertLabelPosition ? 'row-reverse' : 'row'
        }
      >
        {props.selectProps?.labelPosition === 'inline' && (
          <Text fontWeight="normal" color="gray" mr="0.5ch">
            {props.selectProps?.label}
          </Text>
        )}
        <Box>
          {children} {/* This renders the options */}
        </Box>
      </Flex>
    </chakraComponents.SingleValue>
  );
};

const MenuList = ({ children, ...props }: any) => {
  return (
    <chakraComponents.MenuList {...props} background="red">
      {props.selectProps.customFilter}
      {children} {/* This renders the options */}
    </chakraComponents.MenuList>
  );
};

const Option = ({ children, ...props }: any) => {
  return (
    <chakraComponents.Option {...props} background="red">
      <Flex w="full" gap={2}>
        {children} {/* This renders the options */}
        <Labeling gray>{props.data.additionalText}</Labeling>
        <Box ml="auto">{props.data.additionalComponent}</Box>
      </Flex>
    </chakraComponents.Option>
  );
};

const isNotEmptyAndNotUndefined = R.both(
  R.complement(R.isNil),
  R.complement(R.isEmpty),
);

const CreateLabel = (text: string) => (
  <HStack align="baseline">
    <Labeling fontSize="11px" gray>
      add
    </Labeling>
    <Box>{text}</Box>
  </HStack>
);
