import React, { FC } from 'react';
import { Box, Button as RebassButton, ButtonProps } from 'rebass';
import { IconName } from '../..';
import Icon from '../icon';

// Styles
import { fileButton } from './file-button.styles';

export interface QuartzFileButtonProps extends Omit<ButtonProps, 'css'> {
  children: React.ReactNode;
  intent?: 'secondary';
  href?: string;
  mode?: string;
}

const FileButton: FC<QuartzFileButtonProps> = ({
  intent = 'secondary',
  children,
  mode = 'oneFile',
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
        <Icon color="primary" size="sm" icon={IconName.folder} />
      </Box>
      {children}
    </RebassButton>
  );
};

export default FileButton;
