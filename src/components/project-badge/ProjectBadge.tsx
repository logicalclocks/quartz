import React from 'react';
import { Flex, FlexProps } from 'rebass';

import Value from '../typography/value';
import GetIcon from '../icon/GetIcon';
import { IconName } from '../icon/list';

export interface Props extends Omit<FlexProps, 'css'> {
  /** Value for the badge. E.g. 'pending' or 18 */
  value: string | number;
  /** Whether to show a lock icon */
  isLock?: boolean;
}

export const ProjectBadge = ({ value, isLock, sx, ...props }: Props) => (
  <Flex
    alignItems="center"
    justifyContent="center"
    px="6px"
    py="3px"
    {...props}
    sx={{
      borderRadius: '2px',
      border: '1px solid',
      borderColor: '#grayShade1',
      ...sx,
    }}
    as="span"
    tx="variants.badges.primary"
    variant="light"
  >
    <Value as="span" lineHeight="13px">
      {value}
    </Value>
    {isLock && <GetIcon ml="5px" fontSize="10px" icon={IconName.lock} />}
  </Flex>
);
