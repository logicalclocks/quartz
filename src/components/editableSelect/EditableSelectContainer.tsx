import { Input } from '@rebass/forms';
import { forwardRef, useCallback, useEffect, useRef } from 'react';

import { Box, BoxProps, Flex } from '../../index';
import Labeling from '../typography/labeling';
import Chip from './Chip';
import * as S from './editableSelect.styles';
import { ChipsVariants, EditableSelectTypes } from './types';

export interface EditableSelectContainerProps
  extends Omit<BoxProps, 'css' | 'onChange'> {
  label: string;
  search: string;
  value: string[];
  options: string[];
  disabled: boolean;
  isMulti?: boolean;
  placeholder: string;
  inlineLegend?: string;
  noDataMessage?: string;
  inputWidth?: string;
  type: EditableSelectTypes;
  variant: ChipsVariants;
  children: React.ReactNode;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  onChange: (value: string[]) => void;
}

const EditableSelectContainer = forwardRef(
  (
    {
      type,
      value,
      label,
      search,
      variant,
      options,
      children,
      disabled,
      onChange,
      setSearch,
      placeholder,
      inlineLegend,
      noDataMessage,
      isMulti = false,
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
    }, [search.length, value, onChange]);

    useEffect(() => {
      counterRef.current = 0;
    }, [value]);

    return (
      <Box
        {...props}
        width="auto"
        flex="inherit"
        sx={S.container}
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
          {isMulti && (
            <Flex gap="5px">
              {value.map((selection: string) => (
                <Chip
                  mt="5px"
                  key={selection}
                  value={selection}
                  disabled={disabled}
                  variant={variant}
                  onDelete={handleDeleteChip}
                />
              ))}
            </Flex>
          )}
          <Input
            sx={S.inputStyles()}
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
            onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === 'Backspace') {
                handleDelete();
              }
            }}
          />
        </Flex>
        <Flex>{children}</Flex>
      </Box>
    );
  },
);
export default EditableSelectContainer;
