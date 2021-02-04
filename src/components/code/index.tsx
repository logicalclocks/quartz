import React, { FC } from 'react';
import { Box, FlexProps, Flex } from 'rebass';
import Button from '../button';
import styles, { boxStyles } from './code.styles';

export interface CodeProps extends Omit<FlexProps, 'css'> {
  content: string;
  element?: React.ReactElement;
  copyButton?: boolean;
}

const Code: FC<CodeProps> = ({
  content,
  copyButton = false,
  element,
  ...props
}: CodeProps) => {
  function copyToClipboard(): void {
    const dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = content;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
  }

  return (
    <Flex width="100%" variant="code" sx={{ ...styles }} {...props}>
      {!!element ? (
        element
      ) : (
        <Box as="pre" width="90%" sx={{ ...boxStyles }}>
          {content}
        </Box>
      )}

      {copyButton && (
        <Box ml="4" mb="auto">
          <Button intent="secondary" onClick={copyToClipboard}>
            copy
          </Button>
        </Box>
      )}
    </Flex>
  );
};

export default Code;
