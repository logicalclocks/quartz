import React, { FC } from 'react';
// Components
import { Button } from 'rebass';
import Tooltip from '../../tooltip';
import rowButtonStyles from './row-button.styles';

export interface RowButtonProps {
  icon: JSX.Element;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  mainText: string;
  disabled?: boolean;
}

const RowButton: FC<RowButtonProps> = ({
  onClick,
  icon,
  mainText,
  disabled = false,
}: RowButtonProps) => (
  <Tooltip mainText={mainText}>
    <Button
      onClick={onClick}
      justifyContent="center"
      alignItems="center"
      sx={rowButtonStyles}
      ml="3px"
      mr="3px"
      variant="secondary"
      disabled={disabled}
    >
      {icon}
    </Button>
  </Tooltip>
);

export default RowButton;
