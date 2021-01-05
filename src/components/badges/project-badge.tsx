import React, { FC } from 'react';
import { Flex, FlexProps } from 'rebass';

// Components
import Value from '../typography/value';
import Icon from '../icon';

export interface ProjectBadgeProps extends Omit<FlexProps, 'css'> {
  value: string | number;
  isLock?: boolean;
}

const ProjectBadge: FC<ProjectBadgeProps> = ({
  value,
  isLock,
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
    }}
    as="span"
    tx="variants.badges.primary"
    variant="light"
  >
    <Value as="span" lineHeight="13px">
      {value}
    </Value>
    {isLock && <Icon ml="5px" fontSize="10px" icon="lock" />}
  </Flex>
);

export default ProjectBadge;
