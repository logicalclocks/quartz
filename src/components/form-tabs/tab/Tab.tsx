import React, { FC, memo, useMemo } from 'react';
import { Flex } from 'rebass';
// eslint-disable-next-line import/no-cycle
import { Label } from '../../..';
// eslint-disable-next-line import/no-cycle
import TabDescription, { TabState } from './TabDescription';
import styles from './tab.styles';

export interface TabProps {
  title: string;
  state?: TabState;
  active?: boolean;
  onClick: () => any;
}

const Tab: FC<TabProps> = ({
  title,
  active,
  state = TabState.default,
  onClick,
}) => {
  const titleColor = useMemo(
    () => (active ? 'labels.green' : 'black'),
    [active],
  );

  return (
    <Flex sx={styles} onClick={onClick}>
      <Label mb="2px" color={titleColor}>
        {title}
      </Label>
      <TabDescription state={state} />
    </Flex>
  );
};

export default memo(Tab);
