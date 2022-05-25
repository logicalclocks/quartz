import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Box } from 'rebass';
import { default as HT } from '.';
import { Props } from './holy-table';

export default {
  title: 'Quartz/HolyTable',
  component: HT,
} as Meta;

export const HolyTableWithLegend: Story = (props: Omit<Props, 'children'>) => (
  <Box width="700px">
    <HT {...props} legend={['name', 'hex', 'rgb']}>
      <HT.Row>
        <HT.Cell>Black</HT.Cell>
        <HT.Cell>#000000</HT.Cell>
        <HT.Cell>0, 0, 0</HT.Cell>
      </HT.Row>
      <HT.Row>
        <HT.Cell>White</HT.Cell>
        <HT.Cell>#ffffff</HT.Cell>
        <HT.Cell>255, 255, 255</HT.Cell>
      </HT.Row>
    </HT>
  </Box>
);

export const HolyTableCustom: Story = (
  props: Omit<Props, 'children' | 'legend'>,
) => (
  <Box width="700px">
    <HT {...props}>
      <thead style={{ background: 'magenta' }}>
        <tr>
          <HT.HeadCell>Name</HT.HeadCell>
          <HT.HeadCell>hex</HT.HeadCell>
          <HT.HeadCell>rgb</HT.HeadCell>
        </tr>
      </thead>
      <tbody>
        <HT.Row>
          <HT.Cell>Black</HT.Cell>
          <HT.Cell>#000000</HT.Cell>
          <HT.Cell>0, 0, 0</HT.Cell>
        </HT.Row>
        <HT.Row>
          <HT.Cell>White</HT.Cell>
          <HT.Cell>#ffffff</HT.Cell>
          <HT.Cell>255, 255, 255</HT.Cell>
        </HT.Row>
      </tbody>
    </HT>
  </Box>
);

const args = {
  standalone: false,
  padded: true,
  bordered: true,
  hoverable: true,
  rowHeight: '50px',
};

const argTypes = {
  standalone: {
    control: {
      type: 'boolean',
    },
    type: {
      required: false,
    },
  },
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
  rowHeight: {
    control: {
      type: 'text',
    },
    type: {
      required: false,
    },
  },
};

HolyTableWithLegend.args = args;
HolyTableWithLegend.argTypes = argTypes;

HolyTableCustom.args = args;
HolyTableCustom.argTypes = argTypes;
