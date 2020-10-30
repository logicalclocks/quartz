import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Table from './index';
import ReadOnlyTable, { ReadOnlyTableProps } from './read-only';

import dummyValues from './read-only/dummydata.json';

export default {
  title: 'Quartz/Tables',
  component: Table,
} as Meta;


export const ReadOnly: Story<ReadOnlyTableProps> = (props) => {

  const [staticColumn, setStaticColumn]= useState<string>();
  const handleChangeStaticColumn = (column: string) => {
    setStaticColumn(column);
  };

  return (
    <ReadOnlyTable
      {...props} 
      staticColumn={staticColumn}
      onFreeze={handleChangeStaticColumn}
      actions={ [{label: 'go to stats', handler: (column) => { console.log('go to stats of ' + column) } } ]} />
  )
};

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
      summary: 'Type of table',
    },
    defaultValue: { summary: 'read-only' },
  }
};
