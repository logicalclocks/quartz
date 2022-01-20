import React, { FC, forwardRef, useMemo } from 'react';
import { Box, BoxProps, Flex } from 'rebass';

import { Intents } from '../intents';
// Components
import Labeling from '../typography/labeling';
// Styles
import { valueStyles, getLabelStyles, deletabledStyles } from './select.styles';
// Icons
import Icon from '../icon';
import { IconName } from '../..';

export interface SelectLabelProps extends Omit<BoxProps, 'css' | 'onChange'> {
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
  needSwap: boolean;
  deletabled?: boolean;
  onChange: (value: string[]) => void;
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
      onChange,
      isMulti,
      noDataMessage,
      deletabled,
      intent,
      additionalTexts,
      hasPlaceholder,
      needSecondaryText,
      needSwap = false,
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
      <Flex
        alignItems="center"
        justifyContent="space-between"
        {...props}
        // @ts-ignore
        sx={getLabelStyles(intent, deletabled && value.length)}
        tx="variants.select"
        variant={variant}
        tabIndex={0}
        ref={ref}
      >
        {needSwap ? (
          <Flex>
            <Flex>
              <Labeling px="5px" sx={valueStyles}>
                {getLabelText(value, options, isMulti)}
              </Labeling>
            </Flex>
            <Labeling minWidth="max-content" gray>
              {content}
            </Labeling>
          </Flex>
        ) : (
          <Flex>
            <Labeling minWidth="max-content" gray>
              {content}
            </Labeling>
            <Flex>
              <Labeling px="5px" sx={valueStyles}>
                {getLabelText(value, options, isMulti)}
              </Labeling>
              {!!additionalTexts?.length && needSecondaryText && (
                <Labeling gray={true}>
                  {getAdditionalText(value, options, additionalTexts)}
                </Labeling>
              )}
            </Flex>
          </Flex>
        )}
        <Flex>
          {deletabled && (
            <Box
              width="18px"
              height="18px"
              onClick={(e) => {
                e.stopPropagation();

                onChange([]);
              }}
              sx={deletabledStyles}
              ml="auto"
            >
              <Icon icon={IconName.cross} />
            </Box>
          )}
          <Icon icon={IconName.arrow_up_down} size='sm' />
        </Flex>
        {children}
      </Flex>
    );
  },
);
export default SelectLabel;
