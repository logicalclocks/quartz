import { Button } from 'rebass';
import { ButtonProps } from '../../button';
import Tooltip from '../../tooltip';
import rowButtonStyles from './row-button.styles';

export interface RowButtonProps extends Omit<ButtonProps, 'icon'> {
  icon: JSX.Element;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  mainText: string;
  disabled?: boolean;
}

const RowButton = ({
  onClick,
  icon,
  mainText,
  disabled = false,
  ...props
}: RowButtonProps) => (
  <Tooltip mainText={mainText}>
    <Button
      onClick={onClick}
      justifyContent="center"
      alignItems="center"
      ml="3px"
      mr="3px"
      variant="secondary"
      disabled={disabled}
      {...props}
      sx={{ ...rowButtonStyles, ...props.sx }}
    >
      {icon}
    </Button>
  </Tooltip>
);

export default RowButton;
