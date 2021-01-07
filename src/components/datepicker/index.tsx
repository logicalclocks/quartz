import { Box } from 'rebass';
import React, { FC, memo, useState } from 'react';
import Select, { SelectProps } from '../select';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.min.css';
import styles from './datepicker.styles';

export interface DatePickerProps extends ReactDatePickerProps {
  selectProps: SelectProps;
}

const DatePicker: FC<DatePickerProps> = ({ selectProps, ...props }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={styles}>
      <Box onClick={() => setOpen(!open)}>
        <Select {...selectProps} />
      </Box>
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
  );
};

export default memo(DatePicker);
