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
  inlineLegend?: string;
  noDataMessage?: string;
  inputWidth?: string;
  type: ChipsSelectTypes;
  variant: ChipsVariants;
  children: React.ReactNode;
  setSearch: (value: string) => void;
  onChange: (value: string[]) => void;
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
      inlineLegend,
      noDataMessage,
      inputWidth = 'inherit',
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
              width={inputWidth}
              mt="5px"
              minWidth="50px"
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
