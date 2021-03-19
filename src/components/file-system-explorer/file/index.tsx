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
    setActive(!active);
    setSelectedFile(!selectedFile);
  };

  return (
    <Flex sx={{ ...fileExplorerStyle(active, selectedFile) }} tabIndex={0}>
      <Checkbox
        m="10px"
        label={name}
        checked={selectedFile}
        variant="gray"
        onChange={handleClickFile}
      />
    </Flex>
  );
};

export default FileExplorer;
