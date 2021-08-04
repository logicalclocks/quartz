import React, { FC } from 'react';
import { Flex } from 'rebass';
import Tooltip from '../tooltip';
import styles from '../avatar/avatar.styles';
import Label from '../label';

export interface UserProps {
  firstName: string;
  lastName?: string;
  title?: string;
  secondaryText?: string;
  isTooltipActive?: boolean;
}

const User: FC<UserProps> = ({
  firstName,
  lastName,
  title,
  secondaryText,
  isTooltipActive = true,
}: UserProps) => {
  const capitalisedName = `
  ${firstName ? firstName.charAt(0).toLocaleUpperCase() : ''}
  ${lastName ? lastName.charAt(0).toLocaleUpperCase() : ''}
  `;

  const hue = Math.round(((capitalisedName.charCodeAt(0) - 64) * 360) / 26);
  const color = (lightness: number) => `hsl(${hue}, 75%, ${lightness}%)`;

  const ImgBadge = () => (
    <Flex
      sx={{
        ...styles,
        borderColor: color(55),
        color: color(55),
        fontWeight: 'bold',
        fontFamily: 'Inter',
        backgroundColor: color(90),
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '12px',
      }}
      minWidth="32px"
      height="32px"
      alt="User avatar"
    >
      {capitalisedName}
    </Flex>
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
