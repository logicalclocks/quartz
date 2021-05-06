import React, { FC } from 'react';
import { Box, Button as RebassButton, ButtonProps, Flex } from 'rebass';
import icons from '../../sources/icons';
// Styles
import { fileButton, inputBox, inputButton } from './file-button.styles';

export interface QuartzFileButtonProps extends Omit<ButtonProps, 'css'> {
  children: React.ReactNode | string;
  modeNFiles?: boolean;
  intent?: 'secondary';
  href?: string;
  name?: string;
  ref: any;
  onHandleUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const UploadButton: FC<QuartzFileButtonProps> = ({
  intent = 'secondary',
  children,
  href,
  modeNFiles,
  ref,
  name,
  value,
  onHandleUpload,
  handleClick,
  ...props
}: QuartzFileButtonProps) => {
  return (
    <Flex flexDirection="column">
      <RebassButton
        sx={{ ...fileButton }}
        variant={`secondary`}
        {...props}
        onClick={handleClick}
      >
        <Box sx={{ ...inputBox }}>{icons.upload}</Box>
        <input
          type="file"
          name={name}
          style={{
            ...inputButton,
          }}
          ref={ref}
          multiple={modeNFiles}
          onChange={onHandleUpload}
        />
        {children}
      </RebassButton>
    </Flex>
  );
};

export default UploadButton;
