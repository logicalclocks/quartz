import { Box, BoxProps, Flex } from 'rebass';

// Styles
import style from './file-explorer-header.styles';

export interface FileExplorerHeaderProps
  extends Omit<BoxProps, 'css' | 'action'> {
  shortcutActions?: React.ReactNode;
  title?: string;
}

const FileExplorerHeader = ({
  title,
  shortcutActions,
}: FileExplorerHeaderProps) => {
  return (
    <Box sx={{ ...style }}>
      {title && <Flex as="h4">{title}</Flex>}
      {shortcutActions && (
        <div
          style={{
            paddingTop: 20,
          }}
        >
          {shortcutActions}
        </div>
      )}
    </Box>
  );
};

export default FileExplorerHeader;
