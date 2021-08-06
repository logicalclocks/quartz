import React, {
  FC,
  forwardRef,
  useCallback,
  Dispatch,
  useRef,
  useEffect,
  KeyboardEvent,
} from 'react';
import { Box, BoxProps, Flex } from 'rebass';
import { Input } from '@rebass/forms';

import { getContainerStyles, inputStyles } from './editableSelect.styles';
import Chip from './Chip';
import { Intents } from '../intents';
import { Labeling } from '../..';
import { EditableSelectTypes, ChipsVariants } from './types';

export interface EditableSelectContainerProps
  extends Omit<BoxProps, 'css' | 'onChange'> {
  label: string;
  search: string;
  value: string[];
  intent: Intents;
  options: string[];
  disabled: boolean;
  isMulti: boolean;
  placeholder: string;
  inlineLegend?: string;
  noDataMessage?: string;
  inputWidth?: string;
  type: EditableSelectTypes;
  variant: ChipsVariants;
  children: React.ReactNode;
  setSearch: Dispatch<React.SetStateAction<string>>;
  onChange: (value: string[]) => void;
}

const EditableSelectContainer: FC<EditableSelectContainerProps> = forwardRef(
  (
    {
      type,
      value,
      label,
      intent,
      search,
      variant,
      options,
      isMulti,
      children,
      disabled,
      onChange,
      setSearch,
      placeholder,
      inlineLegend,
      noDataMessage,
      inputWidth = 'inherit',
      ...props
    }: EditableSelectContainerProps,
    ref,
  ) => {
    const counterRef = useRef(1);

    const handleDeleteChip = (chip: string) => {
      onChange(value.filter((v) => v !== chip));
    };

    const handleDelete = useCallback(() => {
      if (search.length === 0) counterRef.current -= 1;
      if (counterRef.current < 0 && value.length > 0) {
        onChange(value.slice(0, -1));
      }
    }, [search, value, counterRef]);

    useEffect(() => {
      counterRef.current = 0;
    }, [value]);

    return (
      <Box
        {...props}
        width="auto"
        flex="inherit"
        sx={getContainerStyles(intent)}
        tx="variants.editableSelect.container"
        variant={variant}
        ref={ref}
      >
        {inlineLegend && inlineLegend !== '' && (
          <Labeling minWidth="max-content" gray mr="5px">
            {inlineLegend}
          </Labeling>
        )}
        {value.length === 0 && options.length === 0 && noDataMessage && (
          <Labeling mr="5px" minWidth="max-content">
            {noDataMessage}
          </Labeling>
        )}
        <Flex
          justifyContent="flex-start"
          flexDirection="row"
          flexWrap="wrap"
          flexGrow={1}
          mt="-5px"
        >
          {isMulti &&
            value.map((selection: string) => (
              <Chip
                mt="5px"
                boxed={isMulti}
                key={selection}
                value={selection}
                disabled={disabled}
                variant={variant}
                onDelete={handleDeleteChip}
              />
            ))}
          {type !== 'base' && (
            <Input
              sx={inputStyles()}
              width={inputWidth}
              mt="5px"
              ml={isMulti ? '0px' : '3px'}
              minWidth="50px"
              value={search}
              disabled={disabled}
              placeholder={placeholder}
              onChange={({ target }) => {
                counterRef.current = 1;
                setSearch(target.value);
              }}
              onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
                if (e.key === 'Backspace') {
                  handleDelete();
                }
              }}
            />
          )}
        </Flex>
        <Flex>{children}</Flex>
      </Box>
    );
  },
);
export default EditableSelectContainer;
