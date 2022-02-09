import React, { FC, memo } from 'react';
import { Flex } from 'rebass';
import Label from '../../label';
import icons from './icons';
import { TabState } from '../types';

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
