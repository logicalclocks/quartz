import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Box } from 'rebass';
import HolyTable from '.';
import { Props } from './holy-table';

export default {
  title: 'Quartz/HolyTable',
  component: HolyTable,
} as Meta;

export const HolyTableExample: Story = (props: Omit<Props, 'children'>) => (
  <Box>
    <HolyTable {...props} legend={['name', 'hex', 'rgb']}>
      <HolyTable.Row>
        <HolyTable.Cell>Black</HolyTable.Cell>
        <HolyTable.Cell>#000000</HolyTable.Cell>
        <HolyTable.Cell>0, 0, 0</HolyTable.Cell>
      </HolyTable.Row>
      <HolyTable.Row>
        <HolyTable.Cell>White</HolyTable.Cell>
        <HolyTable.Cell>#ffffff</HolyTable.Cell>
        <HolyTable.Cell>255, 255, 255</HolyTable.Cell>
      </HolyTable.Row>
    </HolyTable>
  </Box>
);

HolyTableExample.args = {
  padded: true,
  bordered: true,
  hoverable: true,
};

HolyTableExample.argTypes = {
  padded: {
    control: {
      type: 'boolean',
    },
    type: {
      required: false,
    },
  },
  bordered: {
    control: {
      type: 'boolean',
    },
    type: {
      required: false,
    },
  },
  hoverable: {
    control: {
      type: 'boolean',
    },
    type: {
      required: false,
    },
  },
  middleColumn: {
    control: {
      type: 'select',
      options: [0, 1, 2],
    },
    type: {
      required: false,
    },
  },
};
