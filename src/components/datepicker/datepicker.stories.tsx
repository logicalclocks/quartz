import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { addDays, subDays } from 'date-fns/fp';

// Components
import DatePicker, { DatePickerProps } from './index';

import { DATE_TIME } from '../../constants';
import { Flex } from '../flex';

export default {
  title: 'Quartz/DatePicker',
  component: DatePicker,
} as Meta;

const Template: Story<DatePickerProps> = ({ selectProps, ...restProps }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());

  return (
    <Flex height="300px">
      <DatePicker
        {...restProps}
        selectProps={{
          ...selectProps,
          noDataMessage: 'from',
        }}
        selected={startDate}
        onChange={(date) => setStartDate(date as Date)}
        excludeDateIntervals={[
          { start: subDays(5, new Date()), end: addDays(5, new Date()) },
        ]}
      />
      <DatePicker
        {...restProps}
        selectProps={{
          ...selectProps,
          noDataMessage: 'to',
        }}
        selected={startDate2}
        onChange={(date) => setStartDate2(date as Date)}
        excludeDateIntervals={[
          { start: subDays(5, new Date()), end: addDays(5, new Date()) },
        ]}
      />
    </Flex>
  );
};

export const Default = Template.bind({});

Default.args = {
  showTimeSelect: true,
  dateFormat: DATE_TIME.DATE_TIME_FULL_MONTH,
  excludeTimes: [new Date()],
};
