import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Table, { TableProps } from './index';
import ReadOnlyTable, { ReadOnlyTableProps } from './read-only';

import dummyValues from './dummydata.json';

export default {
  title: 'Quartz/Tables',
  component: Table,
} as Meta;


export const ReadOnly: Story<ReadOnlyTableProps> = (props) => (
  <ReadOnlyTable {...props} />
);

ReadOnly.args = {
  variant: 'read-only',
  values: dummyValues
};

ReadOnly.argTypes = {
  variant: {
    control: {
      type: 'select',
      options: ['read-only'],
    },
    type: {
      required: false,
      summary: 'Tooltip length',
    },
    defaultValue: { summary: 'read-only' },
  }
};
