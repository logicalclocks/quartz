import React, { FC, forwardRef } from 'react';
import { Box, BoxProps, Flex } from 'rebass';
import { Input } from '@rebass/forms';

import { getContainerStyles, inputStyles } from './chips.styles';
import Chip from './Chip';
import { Intents } from '../intents';
import { Labeling } from '../..';
import { ChipsSelectTypes, ChipsVariants } from './types';

export interface ChipsContainerProps
  extends Omit<BoxProps, 'css' | 'onChange'> {
  label: string;
  search: string;
  value: string[];
  intent: Intents;
  options: string[];
  disabled: boolean;
  isMulti: boolean;
  placeholder: string;
  noDataMessage?: string;
  children: React.ReactNode;
  setSearch: (value: string) => void;
  onChange: (value: string[]) => void;
  type: ChipsSelectTypes;
  variant: ChipsVariants;
}

const ChipsContainer: FC<ChipsContainerProps> = forwardRef(
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
      noDataMessage,
      ...props
    }: ChipsContainerProps,
    ref,
  ) => {
    const handleDeleteChip = (chip: string) => {
      onChange(value.filter((v) => v !== chip));
    };

    return (
      <Box
        {...props}
        width="auto"
        flexGrow="inherit"
        sx={getContainerStyles(intent)}
        tx="variants.chipsSelect.container"
        variant={variant}
        tabIndex={0}
        ref={ref}
      >
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
          {value.map((selection: string) => (
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
              sx={inputStyles}
              width="inherit"
              mt="5px"
              minWidth="100px"
              value={search}
              disabled={disabled}
              placeholder={placeholder}
              onChange={({ target }) => setSearch(target.value)}
            />
          )}
        </Flex>
        <Flex>{children}</Flex>
      </Box>
    );
  },
);
export default ChipsContainer;
