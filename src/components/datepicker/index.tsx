import { Box, Flex } from 'rebass';
import React, { FC, memo, useState } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';

import { SelectProps } from '../select';

import 'react-datepicker/dist/react-datepicker.min.css';
import styles from './datepicker.styles';
import Labeling from '../typography/labeling';
import Value from '../typography/value';
import ArrowsIcon from '../icons/arrows.icon';

export interface DatePickerProps {
  selectProps: SelectProps;
  datePickerAlign?: 'left' | 'right';
}

const DatePicker: FC<DatePickerProps & ReactDatePickerProps> = ({
  selectProps,
  datePickerAlign = 'right',
  ...props
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Flex flexDirection="column" sx={styles(datePickerAlign)}>
      <Flex
        alignItems="center"
        onClick={() => setOpen(!open)}
        sx={{
          backgroundColor: 'white',
          cursor: 'pointer',
          height: '32px',
          px: '5px',
          borderColor: 'white',
          borderWidth: '1px',
          borderStyle: 'solid',
          ':hover': {
            borderColor: 'grayShade2',
            borderWidth: '1px',
            borderStyle: 'solid',
          },
        }}
      >
        <Labeling gray mr="5px">
          {selectProps.noDataMessage}
        </Labeling>
        <Value
          mr="5px"
          sx={{ fontSize: 'text', fontWeight: 'text', fontFamily: 'text' }}
        >
          {selectProps.value}
        </Value>
        <ArrowsIcon />
      </Flex>
      <Box alignSelf={datePickerAlign === 'right' ? 'flex-end' : 'flex-start'}>
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
