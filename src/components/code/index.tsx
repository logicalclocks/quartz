import React, { FC, useState } from 'react';
import { Box, FlexProps, Flex } from 'rebass';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { hybrid } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Button from '../button';
import ExpandViewer from '../expand-viewer';

import styles, {
  boxStyles,
  buttonsStyles,
  lineNumberStyles,
  codeHeaderStyles,
} from './code.styles';
import Value from '../typography/value';
import { copyToClipboard, saveToFile } from '../../utils';
import { PopupProps } from '../popup';
import { GetIcon, IconName } from '../icon';

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

export const defaultPopupProps = {
  width: 'calc(100vw - 80px)',
  height: 'calc(100vh - 80px)',
};

const Code: FC<CodeProps> = ({
  content,
  language = 'text',
  copyButton = false,
  downloadButton = false,
  expandable = false,
  popupProps = defaultPopupProps,
  ...props
}: CodeProps) => {
  const contentLines = content.split('\n');

  // if it's expandable render it inside ExpandViewer
  if (expandable && contentLines.length > CONTENT_UPPER_BOUND) {
    return (
      <ExpandViewer
        title="Code snippet expanded view"
        /**
         * currently merging with built-in javascript spread
         * if we need deep merging we may use lodash merge function instead
         */
        popupProps={{ ...defaultPopupProps, ...popupProps }}
        NormalComponent={() => (
          <CodeSnippet
            content={content}
            language={language}
            copyButton={copyButton}
            downloadButton={downloadButton}
            maxHeightOfCode={
              popupProps.height || popupProps.maxHeight
                ? `calc(${popupProps.height ?? popupProps.maxHeight} - 143px)`
                : '100%'
            }
            {...props}
          />
        )}
        BriefComponent={() => (
          <CodeSnippet
            content={content}
            contentToShow={contentLines
              .slice(0, CONTENT_UPPER_BOUND)
              .join('\n')}
            language={language}
            copyButton={copyButton}
            downloadButton={downloadButton}
            {...props}
          />
        )}
      />
    );
  }

  // if it's not expandable then render it Normaly
  return (
    <CodeSnippet
      content={content}
      language={language}
      copyButton={copyButton}
      downloadButton={downloadButton}
      {...props}
    />
  );
};

export default Code;

// Normal Code Component
interface CodeSnippetProps
  extends Omit<CodeProps, 'popupProps' | 'expandable'> {
  contentToShow?: string;
  maxHeightOfCode?: string;
}
const CodeSnippet: FC<CodeSnippetProps> = ({
  title,
  content,
  contentToShow,
  language,
  copyButton,
  downloadButton,
  downloadCallback,
  wrapLongLines,
  showLineNumbers,
  copyCallback,
  maxHeightOfCode,
  ...props
}) => {
  return (
    <Flex width="100%" sx={styles} height="100%">
      <Flex width="100%" sx={codeHeaderStyles}>
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
        height={maxHeightOfCode}
        {...props}
        p={0}
      >
        <SyntaxHighlighter
          style={hybrid}
          wrapLongLines={wrapLongLines}
          showLineNumbers={showLineNumbers}
          lineNumberStyle={lineNumberStyles}
          language={language}
          customStyle={{
            ...boxStyles,
            paddingLeft: showLineNumbers ? '0px' : '20px',
          }}
        >
          {contentToShow ?? content}
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
      <Button intent="ghost" sx={buttonsStyles} onClick={download}>
        <GetIcon size="md" icon={IconName.download} />
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

  const handleCopyClicked = async () => {
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
        sx={buttonsStyles}
        onClick={handleCopyClicked}
        disabled={copied}
      >
        <GetIcon size="md" icon={IconName.copy} />
        <Value ml="5px" mt="1px">
          {copied ? 'copied' : 'copy'}
        </Value>
      </Button>
    </Box>
  );
};
