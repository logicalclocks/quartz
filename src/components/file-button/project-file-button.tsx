import { Box, Button as RebassButton, ButtonProps } from 'rebass';
import { GetIcon, IconName } from '../icon';
import { fileButton } from './file-button.styles';

export interface QuartzFileButtonProps extends Omit<ButtonProps, 'css'> {
  children: React.ReactNode;
  intent?: 'secondary';
  href?: string;
}

const FileButton = ({
  intent = 'secondary',
  children,
  href,
  ...props
}: QuartzFileButtonProps) => {
  return (
    <RebassButton sx={{ ...fileButton }} variant={`file-${intent}`} {...props}>
      <Box
        sx={{
          height: '9px',
          svg: {
            mr: '11px',
            path: {
              fill: 'primary',
            },
          },
        }}
      >
        <GetIcon color="primary" size="sm" icon={IconName.folder} />
      </Box>
      {children}
    </RebassButton>
  );
};

export default FileButton;
