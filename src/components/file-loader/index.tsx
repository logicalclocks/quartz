import React, { FC } from 'react';
import { Box, BoxProps, Flex, Text } from 'rebass';

// Styles
import styles, {
  fileNameBox,
  statusAndLocationBox,
  loaderCross,
} from './file-loader.styles';
import icons from '../../sources/icons';
import Spinner from '../spinner';

export interface QuartzFileLoaderProps extends Omit<BoxProps, 'css'> {
  id: any;
  children: React.ReactNode | string;
  isLoading: boolean;
  fileName: string;
  located: any;
  disabled?: boolean;
  removeHandler: (id: any) => void;
  // for showing uploading percent
  totalChunks: number;
  uploadedChunks: number;
}

const FileLoader: FC<QuartzFileLoaderProps> = ({
  children,
  isLoading,
  fileName,
  id,
  removeHandler,
  disabled,
  located,
  totalChunks,
  uploadedChunks,
  ...props
}: QuartzFileLoaderProps) => {
  const uploadProgress = Math.floor((uploadedChunks / totalChunks) * 100) || 0;

  return (
    <Flex {...props} sx={styles(isLoading)} key={id}>
      {/* If isLoading, show spinner + uploading percent */}
      {isLoading && (
        <Flex sx={{ alignItems: 'center' }}>
          <Spinner marginRight="10px" />
          <Text color="primary">{`${uploadProgress}%`}</Text>
          <Text color="primary" marginX="8px">
            •
          </Text>
        </Flex>
      )}
      {/* Filename and location */}
      <Text sx={{ ...fileNameBox(isLoading) }}>
        {`${fileName} `}
        <Box sx={{ ...statusAndLocationBox(isLoading) }}>
          {`${isLoading ? 'uploading to' : 'located in'} ${located} `}
        </Box>
      </Text>
      {/* If not disabled, show cross icon */}
      {!disabled && (
        <Box
          sx={{ ...loaderCross(isLoading) }}
          onClick={() => {
            removeHandler(id);
          }}
        >
          <Flex>{icons.cross}</Flex>
        </Box>
      )}
    </Flex>
  );
};

export default FileLoader;
