import { EditorView } from '@codemirror/view';
import React, { useState } from 'react';
import { Box, Flex, FlexProps } from 'rebass';

import { LanguageName, loadLanguage } from '@uiw/codemirror-extensions-langs';
import { darcula } from '@uiw/codemirror-theme-darcula';
import CodeMirror from '@uiw/react-codemirror';
import { copyToClipboard, saveToFile } from '../../utils';
import { Button } from '../button';
import ExpandViewer from '../expand-viewer';
import { GetIcon, IconName } from '../icon';
import { PopupProps } from '../popup';
import Value from '../typography/value';
import { buttonsStyles, codeHeaderStyles } from './code.styles';

const CONTENT_UPPER_BOUND = 12;

export interface CodeProps extends Omit<FlexProps, 'css' | 'title'> {
  title?: React.ReactElement | string;
  content: string;
  language?: LanguageName;
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
  size: '7xl',
};

const Code = ({
  content,
  language,
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
        // eslint-disable-next-line react/no-unstable-nested-components
        NormalComponent={() => (
          <CodeSnippet
            content={content}
            language={language}
            copyButton={copyButton}
            downloadButton={downloadButton}
            {...props}
          />
        )}
        // eslint-disable-next-line react/no-unstable-nested-components
        BriefComponent={() => (
          <CodeSnippet
            content={contentLines.slice(0, CONTENT_UPPER_BOUND).join('\n')}
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
type CodeSnippetProps = Omit<CodeProps, 'popupProps' | 'expandable'>;
const CodeSnippet = ({
  title,
  content,
  language,
  copyButton,
  downloadButton,
  downloadCallback,
  wrapLongLines,
  showLineNumbers,
  copyCallback,
  ...props
}: CodeSnippetProps) => (
  <Flex
    flexDirection="column"
    width="100%"
    height="100%"
    sx={{ position: 'relative' }}
  >
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
      sx={{
        p: 0,
        '*': { fontFamily: 'inherit' },
      }}
      {...props}
    >
      <CodeMirror
        value={content}
        basicSetup={{
          autocompletion: false,
          lineNumbers: showLineNumbers,
          foldGutter: false,
        }}
        style={{
          width: '100%',
        }}
        extensions={[EditorView.lineWrapping].concat(
          language ? [loadLanguage(language)!].filter(Boolean) : [],
        )}
        theme={darcula}
        readOnly
      />
    </Flex>
  </Flex>
);

// Download Button
const DownloadButton = ({
  content,
  downloadCallback,
  title,
}: Pick<CodeProps, 'content' | 'downloadCallback' | 'title'>) => {
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
const CopyButton = ({
  copyCallback,
  content,
}: Pick<CodeProps, 'copyCallback' | 'content'>) => {
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
