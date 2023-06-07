import { FC } from 'react';
import { Box, BoxProps, Flex, Text } from 'rebass';

// Styles
import styles, {
  fileNameBox,
  statusAndLocationBox,
  loaderCross,
} from './file-loader.styles';
import Spinner from '../spinner';
import { GetIcon, IconName } from '../icon';

export interface QuartzFileLoaderProps extends Omit<BoxProps, 'css'> {
  id: any;
  fileName: string;
  isLoading: boolean;
  percentage: number; // for showing uploading progress
  located: any;
  disabled?: boolean;
  children?: React.ReactNode | string;
  removeHandler: (id: any) => void;
}

const FileLoader: FC<QuartzFileLoaderProps> = ({
  id,
  fileName,
  isLoading,
  located,
  percentage,
  disabled,
  children,
  removeHandler,
  ...props
}: QuartzFileLoaderProps) => (
  <Flex {...props} sx={styles(isLoading)} key={id}>
    {/* If isLoading, show spinner + uploading progress */}
    {isLoading && (
      <Flex sx={{ alignItems: 'center' }}>
        <Spinner marginRight="10px" />
        <Text color="primary">
          {`${percentage ? Math.floor(percentage) : 0}%`}
        </Text>
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
        <Flex>
          <GetIcon size="sm" icon={IconName.cross} />
        </Flex>
      </Box>
    )}
  </Flex>
);

export default FileLoader;
