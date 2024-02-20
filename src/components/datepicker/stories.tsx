import { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { addDays, subDays } from 'date-fns/fp';

import DatePicker from './index';

import { DATE_TIME } from '../../constants';
import { Flex } from '../flex';

const meta: Meta<typeof DatePicker> = {
  title: 'DatePicker',
  component: DatePicker,
};
export default meta;

export const Default: StoryObj<typeof DatePicker> = {
  args: {
    showTimeSelect: true,
    dateFormat: DATE_TIME.DATE_TIME_FULL_MONTH,
    excludeTimes: [new Date()],
  },
  render: ({ selectProps, ...restProps }) => {
    const [startDate, setStartDate] = useState(new Date('2024-02-20T16:24:00'));
    const [startDate2, setStartDate2] = useState(
      new Date('2024-02-20T15:24:00'),
    );

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
            { start: subDays(5, startDate), end: addDays(5, startDate) },
          ]}
          startDate={new Date(startDate)}
          endDate={startDate2}
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
            { start: subDays(5, startDate2), end: addDays(5, startDate2) },
          ]}
          startDate={startDate}
          endDate={new Date(startDate2)}
        />
      </Flex>
    );
  },
};
