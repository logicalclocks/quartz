import React, { FC } from 'react';
import Tooltip from '../tooltip';
import { Box, Flex } from 'rebass';
import styles from '../avatar/avatar.styles';
import defaultPhoto from '../avatar/default.svg';
import Label from '../label';

export interface UserProps {
  photo: string;
  name: string;
  title?: string;
  secondaryText?: string;
  isTooltipActive?: boolean;
}

const User: FC<UserProps> = ({
  photo,
  name,
  title,
  secondaryText,
  isTooltipActive = true,
}: UserProps) => {
  const capitalisedName = name.charAt(0).toLocaleUpperCase() + name.slice(1);

  const ImgBadge = () => (
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
  );

  return (
    <Tooltip
      disabled={!isTooltipActive}
      mainText={capitalisedName}
      secondaryText={title}
    >
      {secondaryText ? (
        <Flex
          alignItems="center"
          sx={{ backgroundColor: 'grayShade2', borderRadius: '20px' }}
        >
          <Flex
            sx={{
              border: '1px solid',
              borderColor: 'white',
              borderRadius: '20px',
            }}
          >
            <ImgBadge />
          </Flex>
          <Label ml="12px" mr="20px">
            {secondaryText}
          </Label>
        </Flex>
      ) : (
        <ImgBadge />
      )}
    </Tooltip>
  );
};

export default User;
