import React, { FC } from 'react';
import { Box, Button as RebassButton, ButtonProps, Flex } from 'rebass';
import icons from '../../sources/icons';
// Styles
import { fileButton, inputBox, inputButton } from './file-button.styles';

export interface QuartzFileButtonProps extends Omit<ButtonProps, 'css'> {
  children: React.ReactNode | string;
  mode?: string;
  intent?: 'secondary';
  href?: string;
  // ref?: any;
  // value?: any;
  onHandleUpload: () => void;
}

const UploadButton: FC<QuartzFileButtonProps> = ({
  intent = 'secondary',
  children,
  href,
  mode,
  ref,
  value,
  onHandleUpload,
  // handleClick,
  ...props
}: QuartzFileButtonProps) => {
  // console.log('REF: ', ref, value);
  const hiddenFileInput: any = ref;

  return (
    <Flex flexDirection="column">
      <RebassButton
        sx={{ ...fileButton }}
        variant={`secondary`}
        {...props}
        onClick={onHandleUpload}
      >
        <Box sx={{ ...inputBox }}>{icons.upload}</Box>
        <input
          type="file"
          style={{
            ...inputButton,
          }}
          ref={hiddenFileInput}
          multiple={mode === 'nFiles'}
          onChange={onHandleUpload}
        />
        {children}
      </RebassButton>
    </Flex>
  );
};

export default UploadButton;
