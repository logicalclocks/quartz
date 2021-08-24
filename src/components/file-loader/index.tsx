import React, { FC } from 'react';
import { Box, BoxProps, Flex, Text } from 'rebass';

// Styles
import styles, { fileNameBox, loaderCross } from './file-loader.styles';
import icons from '../../sources/icons';
import Spinner from '../spinner';

export interface QuartzFileLoaderProps extends Omit<BoxProps, 'css'> {
  children: React.ReactNode | string;
  isLoading: boolean;
  fileName: string;
  located: any;
  id: any;
  disabled?: boolean;
  removeHandler: (id: any) => void;
}

const FileLoader: FC<QuartzFileLoaderProps> = ({
  children,
  isLoading,
  fileName,
  id,
  removeHandler,
  disabled,
  located,
  ...props
}: QuartzFileLoaderProps) => (
  <Flex {...props} sx={styles(isLoading)} key={id}>
    {isLoading && <Spinner marginRight="10px" />}
    <Text sx={{ ...fileNameBox(isLoading) }}>
      {fileName}{' '}
      <Box
        style={{
          color: 'black',
          display: 'inline',
          wordBreak: 'break-all',
        }}
      >
        {`${children} ${located} `}
      </Box>
    </Text>
    {!disabled && (
      <Box
        sx={{ ...loaderCross(isLoading) }}
        onClick={() => {
          removeHandler(id);
        }}
      >
        {icons.cross}
      </Box>
    )}
  </Flex>
);

export default FileLoader;
