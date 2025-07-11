import { Meta, StoryObj } from '@storybook/react';

import { addMonths } from 'date-fns';
import { FreshnessBar as FreshnessBarComponent } from './FreshnessBar';
import Label from '../label';
import { Flex } from '../flex';

const monthAgo = addMonths(new Date(), -1);
const halfAYearAgo = addMonths(new Date(), -6);
const threeMonthsAgo = addMonths(new Date(), -3);
const almostAYearAgo = addMonths(new Date(), -11);

const meta: Meta = {
  title: 'Feedback/Progress/FreshnessBar',
  component: FreshnessBarComponent,
  argTypes: {
    expirationDate: {
      control: {
        type: 'date',
      },
    },
  },
};
export default meta;

export const FreshnessBar: StoryObj<typeof FreshnessBarComponent> = {
  args: {
    expirationDate: new Date(monthAgo),
    size: 'md',
  },
  render: (props) => (
    <Flex flexDirection="column" alignItems="center" sx={{ gap: '40px' }}>
      <Flex sx={{ gap: '20px' }}>
        <Label text="Half a year ago">
          <FreshnessBarComponent expirationDate={halfAYearAgo} />
        </Label>
        <Label text="3 months ago">
          <FreshnessBarComponent expirationDate={threeMonthsAgo} />
        </Label>
        <Label text="11 months ago, expiring soon">
          <FreshnessBarComponent expirationDate={almostAYearAgo} />
        </Label>
      </Flex>

      <Flex>
        <Label text="try out datepicker below">
          <FreshnessBarComponent {...props} />
        </Label>
      </Flex>
    </Flex>
  ),
};
