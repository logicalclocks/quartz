import { memo } from 'react';
import { Flex } from 'rebass';
import Label from '../../label';
import { TabState } from '../types';
import { GetIcon, IconName } from '../../icon';

export interface TabDescriptionProps {
  state: TabState;
}

const TabDescription = ({ state }: TabDescriptionProps) => {
  switch (state) {
    case TabState.default:
      return null;
    case TabState.optional:
      return <Label color="gray">optional</Label>;
    case TabState.valid:
      return <GetIcon icon={IconName.validate} color="primary" size="sm" />;
    case TabState.error:
      return (
        <Flex flexDirection="row">
          <GetIcon icon={IconName.error} color="labels.red" size="sm" />
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
