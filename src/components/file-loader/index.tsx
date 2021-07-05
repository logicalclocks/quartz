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
  fileName: string;
  located: any;
  id: any;
  removeHandler: (id: any) => void;
}

const FileLoader: FC<QuartzFileLoaderProps> = ({
  children,
  isLoading,
  fileName,
  id,
  removeHandler,
  located,
  ...props
<<<<<<< HEAD
}: QuartzFileLoaderProps) => (
  <Flex {...props} sx={styles(isLoading)} key={id}>
    {isLoading && (
      <Box sx={{ ...spinner }}>
        <div />
        <div />
        <div />
        <div />
=======
}: QuartzFileLoaderProps) => {
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
      <Text sx={{ ...fileNameBox(isLoading) }}>
        {fileName}{' '}
        <Box
          style={{
            color: 'black',
            display: 'inline',
            wordBreak: 'break-all',
          }}
        >
          {children + ' ' + located + ' '}
        </Box>
      </Text>
      <Box sx={{ ...loaderCross(isLoading) }} onClick={removeHandler}>
        {icons.cross}
>>>>>>> word break file upload job create
      </Box>
    )}
    <Text sx={{ ...fileNameBox(isLoading) }}>
      {fileName}
{' '}
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
    <Box
      sx={{ ...loaderCross(isLoading) }}
      onClick={() => {
        removeHandler(id);
      }}
    >
      {icons.cross}
    </Box>
  </Flex>
);

export default FileLoader;
