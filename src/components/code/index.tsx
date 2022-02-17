import React, { FC, useState } from 'react';
import { Box, FlexProps, Flex } from 'rebass';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { useTheme } from 'emotion-theming';
import Button from '../button';
import { ITheme } from '../../theme/types';
import BriefViewer from '../brief-viewer';

import styles, {
  boxStyles,
  buttonsStyles,
  lineNumberStyles,
  codeHeaderStyles,
} from './code.styles';
import icons from '../../sources/icons';
import Value from '../typography/value';
import { copyToClipboard, saveToFile } from '../../utils';
import { PopupProps } from '../popup';

const CONTENT_UPPER_BOUND = 12;

export interface CodeProps extends Omit<FlexProps, 'css' | 'title'> {
  title?: React.ReactElement | string;
  content: string;
  language?: string;
  copyButton?: boolean;
  downloadButton?: boolean;
  downloadCallback?: () => void;
  wrapLongLines?: boolean;
  showLineNumbers?: boolean;
  copyCallback?: () => Promise<boolean>;
  expandable?: boolean;
  popupProps?: Omit<PopupProps, 'children' | 'isOpen' | 'onClose'>;
}

const defaultPopupProps = {
  width: '700px',
};

const Code: FC<CodeProps> = ({
  title,
  content,
  language = 'text',
  copyButton = false,
  downloadButton = false,
  downloadCallback = undefined,
  wrapLongLines,
  showLineNumbers,
  copyCallback = undefined,
  expandable = false,
  popupProps = defaultPopupProps,
  ...props
}: CodeProps) => {
  const contentLines = content.split('\n');

  // if it's expandable render it inside BriefViewer
  if (expandable && contentLines.length > CONTENT_UPPER_BOUND)
    return (
      <BriefViewer
        title="Code snippet expanded view"
        /** currently merging with built-in javascript spread, if we need deep merging we may use lodash merge function instead */
        popupProps={{ ...defaultPopupProps, ...popupProps }}
        NormalComponent={() => (
          <NormalCode
            content={content}
            title={title}
            language={language}
            copyButton={copyButton}
            downloadButton={downloadButton}
            downloadCallback={downloadCallback}
            wrapLongLines={wrapLongLines}
            maxHeightOfCode={
              popupProps.height || popupProps.maxHeight
                ? `calc(${popupProps.height ?? popupProps.maxHeight} - 143px)`
                : '100%'
            }
            {...props}
          />
        )}
        BriefComponent={() => (
          <BriefCode
            content={contentLines.slice(0, CONTENT_UPPER_BOUND).join('\n')}
            title={title}
            language={language}
            copyButton={copyButton}
            downloadButton={downloadButton}
            downloadCallback={downloadCallback}
            wrapLongLines={wrapLongLines}
            {...props}
          />
        )}
      />
    );

  // if it's not expandable then render it Normaly
  return (
    <NormalCode
      content={content}
      title={title}
      language={language}
      copyButton={copyButton}
      downloadButton={downloadButton}
      downloadCallback={downloadCallback}
      wrapLongLines={wrapLongLines}
      {...props}
    />
  );
};

export default Code;

// Normal Code Component
interface NormalCodeProps extends Omit<CodeProps, 'popupProps' | 'expandable'> {
  maxHeightOfCode?: string;
}
const NormalCode: FC<NormalCodeProps> = ({
  title,
  content,
  language = 'text',
  copyButton = false,
  downloadButton = false,
  downloadCallback = undefined,
  wrapLongLines,
  showLineNumbers,
  copyCallback = undefined,
  maxHeightOfCode,
  ...props
}) => {
  const theme = useTheme<ITheme>();

  return (
    <Flex width="100%" sx={{ ...styles }} height="100%">
      <Flex width="100%" sx={{ ...codeHeaderStyles }}>
        <Box flexGrow={1} ml="8px" my={1}>
          {title}
        </Box>
        {downloadButton && (
          <DownloadButton
            content={content}
            downloadCallback={downloadCallback}
            title={title}
          />
        )}
        {copyButton && (
          <CopyButton content={content} copyCallback={copyCallback} />
        )}
      </Flex>
      <Flex
        width="100%"
        variant="code"
        {...props}
        p={0}
        maxHeight={maxHeightOfCode}
      >
        <SyntaxHighlighter
          wrapLongLines={wrapLongLines}
          showLineNumbers={showLineNumbers}
          lineNumberStyle={{
            ...lineNumberStyles,
            background: theme.colors.grayShade1,
          }}
          language={language}
          customStyle={{
            ...boxStyles,
            paddingLeft: showLineNumbers ? '0px' : '20px',
          }}
        >
          {content}
        </SyntaxHighlighter>
      </Flex>
    </Flex>
  );
};

// Brief Code Component
interface BriefCodeProps extends Omit<CodeProps, 'popupProps' | 'expandable'> {}

const BriefCode: FC<BriefCodeProps> = ({
  title,
  content,
  language = 'text',
  copyButton = false,
  downloadButton = false,
  downloadCallback = undefined,
  wrapLongLines,
  showLineNumbers,
  copyCallback = undefined,
  ...props
}) => {
  const theme = useTheme<ITheme>();

  return (
    <Flex width="100%" sx={{ ...styles }} height="100%">
      <Flex width="100%" sx={{ ...codeHeaderStyles }}>
        <Box flexGrow={1} ml="8px" my={1}>
          {title}
        </Box>
        {downloadButton && (
          <DownloadButton
            content={content}
            downloadCallback={downloadCallback}
            title={title}
          />
        )}
        {copyButton && (
          <CopyButton content={content} copyCallback={copyCallback} />
        )}
      </Flex>
      <Flex width="100%" variant="code" {...props} p={0}>
        <SyntaxHighlighter
          wrapLongLines={wrapLongLines}
          showLineNumbers={showLineNumbers}
          lineNumberStyle={{
            ...lineNumberStyles,
            background: theme.colors.grayShade1,
          }}
          language={language}
          customStyle={{
            ...boxStyles,
            paddingLeft: showLineNumbers ? '0px' : '20px',
          }}
        >
          {content}
        </SyntaxHighlighter>
      </Flex>
    </Flex>
  );
};

// Download Button
const DownloadButton: FC<
  Pick<CodeProps, 'content' | 'downloadCallback' | 'title'>
> = ({ content, downloadCallback, title }) => {
  const download = () => {
    if (downloadCallback) {
      downloadCallback();
    } else {
      saveToFile(title || 'download', content);
    }
  };

  return (
    <Box>
      <Button intent="ghost" sx={{ ...buttonsStyles }} onClick={download}>
        {icons.download}
        <Value ml="5px" mt="1px">
          download
        </Value>
      </Button>
    </Box>
  );
};

// Copy Button
const CopyButton: FC<Pick<CodeProps, 'copyCallback' | 'content'>> = ({
  copyCallback,
  content,
}) => {
  const [copied, setCopied] = useState(false);

  const useCodeKey = async () => {
    let success = false;
    if (copyCallback) {
      success = await copyCallback();
    } else {
      success = await copyToClipboard(content);
    }
    setCopied(success);
    setTimeout(() => {
      setCopied(false);
    }, 800);
  };

  return (
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
  );
};
