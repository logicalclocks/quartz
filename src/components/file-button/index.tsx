import React, { FC, useRef } from 'react';
import { Box, Button as RebassButton, ButtonProps } from 'rebass';
import icons from '../../sources/icons';

// Styles
import { fileButton, inputBox, inputButton } from './file-button.styles';

export interface QuartzFileButtonProps extends Omit<ButtonProps, 'css'> {
  children: React.ReactNode | string;
  mode?: string;
  intent?: 'secondary';
  href?: string;
}

const UploadButton: FC<QuartzFileButtonProps> = ({
  intent = 'secondary',
  children,
  href,
  mode,
  ...props
}: QuartzFileButtonProps) => {
  const hiddenFileInput: any = useRef();

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  //
  // Handle the uploaded file
  //
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = event.target.files;
    renderUploadFiles(fileUploaded);
  };

  const renderUploadFiles = (file: any) => {
    const list = document.createElement('ul');
    //for every file...
    for (let x = 0; x < file.length; x++) {
      //add to list
      const li = document.createElement('li');
      li.innerHTML = 'File ' + ':  ' + file[x].name;
      list.append(li);
    }
  };

  return (
    <RebassButton
      sx={{ ...fileButton }}
      variant={`file-${intent}`}
      {...props}
      onClick={handleClick}
    >
      <Box sx={{ ...inputBox }}>{icons.download}</Box>
      <input
        type="file"
        style={{
          ...inputButton,
        }}
        ref={hiddenFileInput}
        multiple={mode === 'nFiles'}
        onChange={handleChange}
      />
      {children}
    </RebassButton>
  );
};

export default UploadButton;
