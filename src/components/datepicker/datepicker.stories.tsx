import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

// Components
import DatePicker, { DatePickerProps } from './index';

import { DATE_TIME } from '../../constants';

export default {
  title: 'Quartz/DatePicker',
  component: DatePicker,
} as Meta;

const Template: Story<DatePickerProps> = (props) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      {...props}
      selectProps={{
        value: [new Date(startDate).toISOString()],
        options: [],
        onChange: () => {},
        placeholder: 'to',
        noDataMessage: 'from',
      }}
      selected={startDate}
      onChange={(date) => setStartDate(date as Date)}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  showTimeSelect: true,
  dateFormat: DATE_TIME.DATE_TIME_FULL_MONTH,
  excludeTimes: [new Date()],
};

Default.argTypes = {
  selectProps: {
    type: {
      required: true,
      summary: 'Select props',
    },
  },
  datePickerAlign: {
    control: {
      type: 'select',
      default: 'right',
      options: ['left', 'right'],
    },
    type: {
      required: false,
    },
    defaultValue: {
      summary: 'datepicker align',
    },
  },
};
