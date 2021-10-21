import React, { FC, memo } from 'react';
import { Flex } from 'rebass';
// eslint-disable-next-line import/no-cycle
import { Label } from '../../..';
import icons from './icons';

export enum TabState {
  valid = 'valid',
  error = 'error',
  default = 'default',
  optional = 'optional',
}

export interface TabDescriptionProps {
  state: TabState;
}

const TabDescription: FC<TabDescriptionProps> = ({ state }) => {
  switch (state) {
    case TabState.default:
      return null;
    case TabState.optional:
      return <Label color="gray">optional</Label>;
    case TabState.valid:
      return icons.check;
    case TabState.error:
      return (
        <Flex flexDirection="row">
          {icons.error}
          <Label ml="4px" color="labels.red">
            changes required
          </Label>
        </Flex>
      );
    default:
      return null;
  }
};

export default memo(TabDescription);
