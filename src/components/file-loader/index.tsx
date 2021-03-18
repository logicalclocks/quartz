import React, { FC } from 'react';
import { Box, BoxProps, Flex, Text } from 'rebass';

// Styles
import styles, {
  fileNameBox,
  loaderCross,
  spinner,
} from './file-loader.styles';
import icons from '../../sources/icons';

export interface QuartzFileLoaderProps extends Omit<BoxProps, 'css'> {
  children: React.ReactNode | string;
  isLoading: boolean;
  file: React.ReactNode;
}

const FileLoader: FC<QuartzFileLoaderProps> = ({
  children,
  isLoading,
  file,
  id,
  ...props
}: QuartzFileLoaderProps) => {
  const removeHandler = () => {
    console.log(`remove`);
  };

  return (
    <Flex {...props} sx={styles(isLoading)} key={id}>
      {isLoading && (
        <Box sx={{ ...spinner }}>
          <div />
          <div />
          <div />
          <div />
        </Box>
      )}
      <Text sx={{ ...fileNameBox(isLoading) }}>{file}</Text>
      {' ' + children}
      <Box sx={{ ...loaderCross(isLoading) }} onClick={removeHandler}>
        {icons.cross}
      </Box>
    </Flex>
  );
};

export default FileLoader;
