import React, { FC, forwardRef, useMemo } from 'react';
import { Box, BoxProps, Flex } from 'rebass';

// Icons
import ArrowsIcon from '../icons/arrows.icon';
import icons from '../../sources/icons';
// Components
import Labeling from '../typography/labeling';
// Styles
import { valueStyles, getLabelStyles, deletabledStyles } from './select.styles';
import { Intents } from '../intents';
// Types
import { SelectOpt } from './types';

export interface SelectLabelProps
  extends Omit<BoxProps, 'css' | 'onChange' | 'value'> {
  variant: 'primary' | 'white' | 'disabled';
  placeholder: string;
  value: SelectOpt[];
  options: SelectOpt[];
  children: React.ReactNode;
  isMulti?: boolean;
  noDataMessage?: string;
  intent: Intents;
  needSecondaryText: boolean;
  needSwap: boolean;
  deletabled?: boolean;
  label?: string;
  onChange: (value: SelectOpt | SelectOpt[]) => void;
}

const getLabelText = (
  value: SelectOpt[],
  options: SelectOpt[],
  isMulti?: boolean,
) => {
  if (!options.length && !value.length) return '';
  if (value[0]?.key === 'any' && value.length === 1) return 'any';
  return value.length === options.length && isMulti
    ? 'all'
    : value.map((x) => x.label).join(', ');
};

const SelectLabel: FC<SelectLabelProps> = forwardRef(
  (
    {
      label,
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
      needSecondaryText,
      needSwap = false,
      ...props
    }: SelectLabelProps,
    ref,
  ) => {
    const content = useMemo(() => {
      if (!options.length && !value.length) return noDataMessage;
      if (!options.length) return noDataMessage;
      if (!value.length) return placeholder;
      return label || '';
    }, [options.length, value.length, noDataMessage, placeholder, label]);

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
              {!isMulti && value[0]?.additionalText && needSecondaryText && (
                <Labeling gray>{value[0].additionalText}</Labeling>
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

                onChange(isMulti ? ([] as SelectOpt[]) : ({} as SelectOpt));
              }}
              sx={deletabledStyles}
              ml="auto"
            >
              {icons.cross}
            </Box>
          )}
          <ArrowsIcon />
        </Flex>
        {children}
      </Flex>
    );
  },
);
export default SelectLabel;
