import React, { FC } from 'react';
import { Box, Button as RebassButton, ButtonProps, Flex } from 'rebass';
import { GetIcon, IconName } from '../icon';
// Styles
import { fileButton, inputBox, inputButton } from './file-button.styles';

export interface QuartzFileButtonProps extends Omit<ButtonProps, 'css'> {
  children: React.ReactNode | string;
  modeNFiles?: boolean;
  intent?: 'secondary';
  href?: string;
  name?: string;
  currentRef?: any;
  validExtensions?: string[];
  onHandleUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  isDisabledUploadButton?: boolean;
}

const UploadButton: FC<QuartzFileButtonProps> = ({
  intent = 'secondary',
  children,
  href,
  modeNFiles,
  currentRef,
  name,
  value,
  onHandleUpload,
  handleClick,
  validExtensions,
  isDisabledUploadButton,
  ...props
}: QuartzFileButtonProps) => {
  return (
    <Flex flexDirection="column">
      <RebassButton
        disabled={isDisabledUploadButton}
        sx={{ ...fileButton }}
        variant="secondary"
        {...props}
        onClick={handleClick}
      >
        <Box sx={{ ...inputBox }}>
          <GetIcon color="primary" size="sm" icon={IconName.upload} />
        </Box>
        <input
          type="file"
          name={name}
          style={{
            ...inputButton,
          }}
          ref={currentRef}
          multiple={modeNFiles}
          {...(validExtensions && { accept: validExtensions.join(',') })}
          onChange={onHandleUpload}
        />
        {children}
      </RebassButton>
    </Flex>
  );
};

export default UploadButton;
