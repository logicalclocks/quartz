import { Box, Flex } from 'rebass';
import React, { FC, memo, useState } from 'react';
import Select, { SelectProps } from '../select';
import ReactDatePicker from 'react-datepicker';

import { ReactDatePickerProps } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.min.css';
import styles from './datepicker.styles';

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
      <Box onClick={() => setOpen(!open)}>
        <Select {...selectProps} />
      </Box>
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
