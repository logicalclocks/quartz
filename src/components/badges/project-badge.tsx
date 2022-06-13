import React, { FC } from 'react';
import { Flex, FlexProps } from 'rebass';

// Components
import Value from '../typography/value';
import GetIcon from '../icon/GetIcon';
import { IconName } from '../icon/list';

export interface ProjectBadgeProps extends Omit<FlexProps, 'css'> {
  value: string | number;
  isLock?: boolean;
}

const ProjectBadge: FC<ProjectBadgeProps> = ({
  value,
  isLock,
  sx,
  ...props
}: ProjectBadgeProps) => (
  <Flex
    alignItems="center"
    justifyContent="center"
    px="6px"
    py="3px"
    {...props}
    sx={{
      borderRadius: '2px',
      border: '1px solid #CBCBCB',
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

export default ProjectBadge;
