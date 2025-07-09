import type { Meta, StoryObj } from '@storybook/react';

import ReadOnlyTableComponent from './index';
import dummyValues from './dummydata.json';
import { headers } from '../stories';

const meta = {
  title: 'DataDisplay/Tables/ReadOnlyTable',
  component: ReadOnlyTableComponent,
} satisfies Meta<typeof ReadOnlyTableComponent>;

export default meta;

type Story = StoryObj<typeof ReadOnlyTableComponent>;

export const ReadOnlyTable: Story = {
  args: {
    values: dummyValues,
    columnHeaders: headers,
    actions: [
      {
        label: 'go to stats',
        handler: (column) => {
          console.log(`go to stats of ${column}`);
        },
      },
    ],
    initialStaticColumn: 'score',
  },
};
