import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Label from '../label';

import Pagination from './index';

const meta: Meta<typeof Pagination> = {
  title: 'Pagination',
  component: Pagination,
  argTypes: {
    onChange: {
      description: 'Input change callback function, receives page number',
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
      description: 'Total pages count',
    },
    currentPage: {
      control: {
        type: 'number',
      },
      description: 'Current active page',
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'white'],
      },
      description: 'Pagination variant',
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Pagination> = {
  args: {
    totalPages: 10,
  },
  render: (props) => {
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
  },
};
