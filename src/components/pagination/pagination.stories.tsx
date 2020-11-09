// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Label from '../label';

import Pagination, { PaginationProps } from './index';

export default {
  title: 'Quartz/Pagination',
  component: Pagination,
} as Meta;

const Template: Story<PaginationProps> = (props) => {
  const [page, setPage] = useState(2);

  const handleChange = (current: number) => {
    action('Pagination change')(current);

    setPage(current);
  };

  return (
    <Label as="span" text="go to page" align="left">
      <Pagination {...props} currentPage={page} onChange={handleChange} />
    </Label>
  );
};

export const Default = Template.bind({});

Default.args = {
  totalPages: 10,
};

Default.argTypes = {
  onChange: {
    type: {
      required: true,
      summary: 'Input change callback function, receives page number',
    },
  },
  disabled: {
    control: {
      type: 'boolean',
    },
  },
  totalPages: {
    control: {
      type: 'number',
    },
    type: {
      required: true,
      summary: 'Total pages count',
    },
  },
  currentPage: {
    control: {
      type: 'number',
    },
    type: {
      required: true,
      summary: 'Current active page',
    },
  },
  variant: {
    control: {
      type: 'select',
      options: ['primary', 'white'],
    },
    type: {
      required: false,
      summary: 'Pagination variant',
    },
  },
};
