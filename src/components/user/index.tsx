import React, { FC } from 'react';
import Tooltip from '../tooltip';
import { Box } from 'rebass';
import styles from '../avatar/avatar.styles';
import defaultPhoto from '../avatar/default.svg';

export interface UserProps {
  photo: string;
  name: string;
  title?: string;
  isTooltipActive?: boolean;
}

const User: FC<UserProps> = ({
  photo,
  name,
  title,
  isTooltipActive = true,
}: UserProps) => {
  const capitalisedName = name.charAt(0).toLocaleUpperCase() + name.slice(1);

  return (
    <Tooltip
      disabled={!isTooltipActive}
      mainText={capitalisedName}
      secondaryText={title}
    >
      <Box
        as="img"
        src={photo || defaultPhoto}
        sx={{
          ...styles,
          borderColor: `hsl(${Math.round(
            ((capitalisedName.charCodeAt(0) - 64) * 360) / 26,
          )}, 75%, 55%)`,
        }}
        minWidth="32px"
        height="32px"
        alt="User avatar"
      />
    </Tooltip>
  );
};

export default User;
