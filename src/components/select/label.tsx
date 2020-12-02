import React, { FC, forwardRef } from 'react';
import { Box, BoxProps } from 'rebass';

// Icons
import ArrowsIcon from '../icons/arrows.icon';
// Components
import Labeling from '../typography/labeling';
// Styles
import styles, { valueStyles } from './select.styles';

export interface SelectLabelProps extends Omit<BoxProps, 'css'> {
  variant: 'primary' | 'white' | 'disabled';
  placeholder: string;
  value: string[];
  options: string[];
  children: React.ReactNode;
  isMulti?: boolean;
  noDataMessage?: string;
}

const getLabelText = (value: string[], options: string[]) =>
  value.length === options.length && options.length ? 'all' : value.join(', ');

const SelectLabel: FC<SelectLabelProps> = forwardRef(
  (
    {
      variant,
      placeholder,
      value,
      children,
      options,
      isMulti,
      noDataMessage,
      ...props
    }: SelectLabelProps,
    ref,
  ) => {
    const content = !options.length ? noDataMessage : placeholder;

    return (
      <Box
        {...props}
        sx={styles}
        tx="variants.select"
        variant={variant}
        tabIndex={0}
        ref={ref}
      >
        <Labeling minWidth="max-content" gray={!!value.length}>
          {content}
        </Labeling>
        <Labeling px="5px" sx={valueStyles}>
          {getLabelText(value, options)}
        </Labeling>
        <ArrowsIcon />
        {children}
      </Box>
    );
  },
);
export default SelectLabel;
