import React, { FC, useState } from 'react';
import { Flex } from 'rebass';

// Styles
import { fileExplorerStyle } from './file-explorer.styles';
import { Checkbox } from '../../../index';

export interface QuartzFileExplorerProps {
  name: string;
  isActive: boolean;
  selected: boolean;
}

const FileExplorer: FC<QuartzFileExplorerProps> = ({
  isActive,
  name,
  selected,
  ...props
}: QuartzFileExplorerProps) => {
  const [active, setActive] = useState(isActive);
  const [selectedFile, setSelectedFile] = useState(selected);

  const handleClickFile = () => {
    console.log('handleClickFile');
    setActive(!active);
    setSelectedFile(!selectedFile);
  };

  return (
    <Flex
      sx={{ ...fileExplorerStyle(active, selectedFile) }}
      tabIndex={0}
      onClick={handleClickFile}
    >
      <Checkbox m="10px" checked={selectedFile} variant="gray" />
      {name}
    </Flex>
  );
};

export default FileExplorer;
