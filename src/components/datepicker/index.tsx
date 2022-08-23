import { Box, Flex, SxStyleProp } from 'rebass';
import React, { FC, memo, useState } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';

import { SelectProps } from '../select';

import 'react-datepicker/dist/react-datepicker.min.css';
import styles from './datepicker.styles';
import Labeling from '../typography/labeling';
import Value from '../typography/value';
import { GetIcon, IconName } from '../icon';

export interface DatePickerProps {
  selectProps: SelectProps;
  datePickerAlign?: 'left' | 'right';
  sx?: SxStyleProp;
}

const DatePicker: FC<DatePickerProps & ReactDatePickerProps> = ({
  selectProps,
  datePickerAlign = 'right',
  sx,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Flex flexDirection="column" sx={{ ...styles(datePickerAlign), ...sx }}>
      <Flex
        alignItems="center"
        onClick={() => setOpen(!open)}
        sx={{
          height: '32px',
          px: '5px',
          borderWidth: '1px',
          borderStyle: 'solid',
          ...(open ? { borderColor: 'grayShade1' } : {}),
        }}
        variant={selectProps.variant ?? 'white'}
        tx="variants.select"
      >
        <Labeling gray mr="5px">
          {selectProps.noDataMessage}
        </Labeling>
        <Value
          mr="5px"
          width="100%"
          sx={{ fontSize: 'text', fontWeight: 'text', fontFamily: 'text' }}
        >
          {selectProps.value}
        </Value>
        <GetIcon icon={IconName.arrow_up_down} size="sm" />
      </Flex>
      <Box
        height="0px"
        alignSelf={datePickerAlign === 'right' ? 'flex-end' : 'flex-start'}
      >
        <ReactDatePicker
          open={open}
          {...props}
          onChange={(date, event) => {
            props.onChange(date, event);
            setOpen(false);
          }}
          onClickOutside={() => setOpen(false)}
        />
      </Box>
    </Flex>
  );
};

export default memo(DatePicker);
