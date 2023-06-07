import { memo, useMemo } from 'react';
import { Flex } from 'rebass';
import TabDescription from './TabDescription';
import styles from './tab.styles';
import Label from '../../label';
import { TabState } from '../types';

export interface TabProps {
  title: string;
  state?: TabState;
  active?: boolean;
  onClick: () => any;
}

const Tab = ({
  title,
  active,
  state = TabState.default,
  onClick,
}: TabProps) => {
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
