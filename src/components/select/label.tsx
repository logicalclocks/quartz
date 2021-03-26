import React, { FC, forwardRef, useMemo } from 'react';
import { Box, BoxProps, Flex } from 'rebass';

// Icons
import ArrowsIcon from '../icons/arrows.icon';
import { Intents } from '../intents';
// Components
import Labeling from '../typography/labeling';
// Styles
import { valueStyles, getLabelStyles } from './select.styles';

export interface SelectLabelProps extends Omit<BoxProps, 'css'> {
  variant: 'primary' | 'white' | 'disabled';
  placeholder: string;
  value: string[];
  options: string[];
  children: React.ReactNode;
  isMulti?: boolean;
  noDataMessage?: string;
  hasPlaceholder: boolean;
  intent: Intents;
  additionalTexts?: string[];
  needSecondaryText: boolean;
}

const getAdditionalText = (
  value: string[],
  options: string[],
  additionalTexts: string[],
) => {
  const index = options.indexOf(value[0]);

  if (index > -1) {
    return additionalTexts[index];
  }

  return '';
};

const getLabelText = (
  value: string[],
  options: string[],
  isMulti?: boolean,
) => {
  if (!options.length && !value.length) {
    return '';
  }

  if (value[0] === 'any' && value.length === 1) {
    return 'any';
  }

  return value.length === options.length && isMulti ? 'all' : value.join(', ');
};

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
      intent,
      additionalTexts,
      hasPlaceholder,
      needSecondaryText,
      ...props
    }: SelectLabelProps,
    ref,
  ) => {
    const content = useMemo(() => {
      if (!options.length && !value.length) {
        return noDataMessage;
      }

      if (!options.length) {
        return noDataMessage;
      }

      if (!value.length) {
        return placeholder;
      }

      if (value.length && hasPlaceholder) {
        return placeholder;
      }

      return hasPlaceholder ? placeholder : '';
    }, [value, options, hasPlaceholder, placeholder, noDataMessage]);

    return (
      <Box
        {...props}
        // @ts-ignore
        sx={getLabelStyles(intent)}
        tx="variants.select"
        variant={variant}
        tabIndex={0}
        ref={ref}
      >
        <Labeling
          minWidth="max-content"
          gray={!hasPlaceholder && !!options.length ? true : !!value.length}
        >
          {content}
        </Labeling>
        <Flex>
          <Labeling px="5px" sx={valueStyles}>
            {getLabelText(value, options, isMulti)}
          </Labeling>
          {!!additionalTexts?.length && !!value.length && needSecondaryText && (
            <Labeling gray={true}>
              {getAdditionalText(value, options, additionalTexts)}
            </Labeling>
          )}
        </Flex>
        <ArrowsIcon />
        {children}
      </Box>
    );
  },
);
export default SelectLabel;
