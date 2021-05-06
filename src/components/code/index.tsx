import React, { FC, useState } from 'react';
import { Box, FlexProps, Flex } from 'rebass';
import Button from '../button';

import styles, {
  boxStyles,
  buttonsStyles,
  codeHeaderStyles,
} from './code.styles';
import SyntaxHighlighter from 'react-syntax-highlighter';
import icons from '../../sources/icons';
import Value from '../typography/value';
import { copyToClipboard, saveToFile } from '../../utils';

export interface CodeProps extends Omit<FlexProps, 'css' | 'title'> {
  title?: React.ReactElement | string;
  content: string;
  language?: string;
  element?: React.ReactElement;
  isColorSyntax?: boolean;
  copyButton?: boolean;
  downloadButton?: boolean;
  wrapLongLines?: boolean;
}

const Code: FC<CodeProps> = ({
  title,
  content,
  language,
  isColorSyntax,
  copyButton = false,
  downloadButton = false,
  wrapLongLines,
  element,
  ...props
}: CodeProps) => {
  const [copied, setCopied] = useState(false);

  const useCodeKey = () => {
    setCopied(copyToClipboard(content));
    setTimeout(() => {
      setCopied(false);
    }, 800);
  };

  return (
    <Flex width="100%" sx={{ ...styles }}>
      <Flex width="100%" sx={{ ...codeHeaderStyles }}>
        {title ? (
          <Flex alignItems="center" ml="8px">
            {title}
          </Flex>
        ) : (
          <div />
        )}
        <Flex>
          {downloadButton && (
            <Box>
              <Button
                intent="ghost"
                sx={{ ...buttonsStyles }}
                onClick={() => saveToFile(title || 'download', content)}
              >
                {icons.download}
                <Value ml="5px" mt="1px">
                  download
                </Value>
              </Button>
            </Box>
          )}
          {copyButton && (
            <Box>
              <Button
                intent="ghost"
                sx={{ ...buttonsStyles }}
                onClick={useCodeKey}
                disabled={copied}
              >
                {icons.copy}
                <Value ml="5px" mt="1px">
                  {!copied ? 'copy' : 'copied'}
                </Value>
              </Button>
            </Box>
          )}
        </Flex>
      </Flex>
      <Flex width="100%" variant="code" {...props}>
        {!!element ? (
          element
        ) : (
          <SyntaxHighlighter
            wrapLongLines={wrapLongLines}
            language={isColorSyntax ? language : 'text'}
            customStyle={{ ...boxStyles }}
          >
            {content}
          </SyntaxHighlighter>
        )}
      </Flex>
    </Flex>
  );
};

export default Code;
