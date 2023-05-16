import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button, usePopup } from '../..';
import Popup from './index';

const meta: Meta<typeof Popup> = {
  title: 'Popup',
};
export default meta;

export const PopupStory: StoryObj<typeof Popup> = {
  args: {
    left: '20%',
    top: '20%',
    bottom: '20%',
    right: '20%',
    variant: 'primary',
    hasBackdrop: true,
    hasCloseButton: true,
  },
  render: (props) => {
    const [isOpen, handleToggle] = usePopup();

    return (
      <div>
        <Button onClick={handleToggle}>Open Popup</Button>
        <Popup isOpen={isOpen} onClose={handleToggle} {...props}>
          <div>this is children</div>
        </Popup>
      </div>
    );
  },
};
