import React, { FC, useState } from 'react';
import { Box, FlexProps, Flex } from 'rebass';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { useTheme } from 'emotion-theming';
import Button from '../button';
import { ITheme } from '../../theme/types';

import styles, {
  boxStyles,
  buttonsStyles,
  lineNumberStyles,
  codeHeaderStyles,
} from './code.styles';
import Value from '../typography/value';
import { copyToClipboard, saveToFile } from '../../utils';
import Icon from '../icon';
import { IconName } from '../..';

export interface CodeProps extends Omit<FlexProps, 'css' | 'title'> {
  title?: React.ReactElement | string;
  content: string;
  language?: string;
  element?: React.ReactElement;
  isColorSyntax?: boolean;
  copyButton?: boolean;
  downloadButton?: boolean;
  downloadCallback?: () => void;
  wrapLongLines?: boolean;
  showLineNumbers?: boolean;
}

const Code: FC<CodeProps> = ({
  title,
  content,
  language,
  isColorSyntax,
  copyButton = false,
  downloadButton = false,
  downloadCallback = undefined,
  wrapLongLines,
  showLineNumbers,
  element,
  ...props
}: CodeProps) => {
  const [copied, setCopied] = useState(false);

  const theme = useTheme<ITheme>();

  const useCodeKey = () => {
    setCopied(copyToClipboard(content));
    setTimeout(() => {
      setCopied(false);
    }, 800);
  };

  const download = () => {
    if (downloadCallback) {
      downloadCallback();
    } else {
      saveToFile(title || 'download', content);
    }
  };

  return (
    <Flex width="100%" sx={{ ...styles }} height="100%">
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
                onClick={download}
              >
                <Icon size="sm" icon={IconName.download} />
                <Value>
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
                <Icon size="sm" icon={IconName.copy} />
                <Value>
                  {!copied ? 'copy' : 'copied'}
                </Value>
              </Button>
            </Box>
          )}
        </Flex>
      </Flex>
      <Flex width="100%" variant="code" height="100%" {...props}>
        {element || (
          <SyntaxHighlighter
            wrapLongLines={wrapLongLines}
            showLineNumbers={showLineNumbers}
            lineNumberStyle={{
              ...lineNumberStyles,
              background: theme.colors.grayShade1,
            }}
            language={isColorSyntax ? language : 'text'}
            customStyle={{
              ...boxStyles,
              paddingLeft: showLineNumbers ? '0px' : '20px',
            }}
          >
            {content}
          </SyntaxHighlighter>
        )}
      </Flex>
    </Flex>
  );
};

export default Code;
