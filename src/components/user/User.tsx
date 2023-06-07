import * as R from 'ramda';
import { Flex } from 'rebass';
import Label from '../label';
import Tooltip from '../tooltip';
import * as S from './styles';

export interface Props {
  /** User's first name */
  firstName: string;
  /**  User's last name */
  lastName?: string;
  /** Whether tooltip should be shown */
  isTooltipActive?: boolean;
  /** Appears in the tooltip */
  title?: string;
  /** Allows including text into user badge */
  secondaryText?: string;
}

export const User = ({
  firstName,
  lastName,
  title,
  secondaryText,
  isTooltipActive = true,
}: Props) => {
  const initials = `${R.head(firstName)} ${R.head(lastName ?? '')}`;

  return (
    <Tooltip
      disabled={!isTooltipActive}
      mainText={firstName && lastName ? `${firstName} ${lastName}` : firstName}
      secondaryText={title}
    >
      {!secondaryText ? (
        <ImageBadge initials={initials} />
      ) : (
        <Flex alignItems="center" sx={S.secondaryTextContainer}>
          <Flex sx={S.userBadgeContainer}>
            <ImageBadge initials={initials} />
          </Flex>
          <Label ml="12px" mr="20px">
            {secondaryText}
          </Label>
        </Flex>
      )}
    </Tooltip>
  );
};

const ImageBadge = ({ initials }: { initials: string }) => {
  const hue = Math.round(((initials.charCodeAt(0) - 64) * 360) / 26);

  return (
    <Flex sx={S.avatar(hue)} minWidth="32px" height="32px" alt="User avatar">
      {initials}
    </Flex>
  );
};
