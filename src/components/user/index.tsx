import React, { FC } from 'react';
import Avatar from '../avatar';
import Tooltip from '../tooltip';

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
      <Avatar
        src={photo}
        borderColor={`hsl(${Math.round(
          ((capitalisedName.charCodeAt(0) - 64) * 360) / 26,
        )}, 75%, 55%)`}
      />
    </Tooltip>
  );
};

export default User;
