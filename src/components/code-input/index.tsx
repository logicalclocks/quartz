import React, { FC, forwardRef } from 'react';
import { Box, Flex } from 'rebass';

import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import { darcula } from '@uiw/codemirror-theme-darcula';
import CodeMirror from '@uiw/react-codemirror';

// Components
import { BoxProps } from '../box';
import { GetIcon, IconName } from '../icon';
import InputInfo from '../input-info';
import { Intents } from '../intents';
import Label, { LabelProps } from '../label';
import Tooltip from '../tooltip';
import Labeling from '../typography/labeling';

export interface CodeInputProps
  extends Omit<BoxProps, 'children' | 'onChange'> {
  label?: string;
  value: string;
  // Use javascript for displaying JSON
  mode: 'javascript' | 'yaml' | 'python' | 'sql';
  width?: string | number;
  height?: string | number;
  labelAction?: React.ReactNode;
  optional?: boolean;
  tooltipInfo?: string;
  labelProps?: Omit<LabelProps, 'action' | 'text' | 'children'>;
  onChange: (value: string) => void;
  readOnly: boolean;
  info?: string;
  intent?: Intents;
}

const CodeInput: FC<CodeInputProps> = forwardRef(
  ({
    label = '',
    value,
    mode,
    width = '300px',
    height = '600px',
    labelAction,
    optional,
    tooltipInfo,
    labelProps,
    onChange,
    readOnly = false,
    info,
    intent = 'default',
    ...props
  }: CodeInputProps) => {
    const actions = (labelAction || tooltipInfo || optional) && (
      <Flex>
        {labelAction}
        {optional && (
          <Labeling ml="8px" bold gray>
            optional
          </Labeling>
        )}
        {tooltipInfo && (
          <Tooltip mainText={tooltipInfo}>
            <GetIcon mt="3px" ml="3px" size="xs" icon={IconName.info_block} />
          </Tooltip>
        )}
      </Flex>
    );

    return (
      <Box width={width} height={height} tx="inputs" {...props}>
        <Label
          action={actions}
          text={label}
          width={width}
          height={height}
          {...labelProps}
          mb="8px"
        >
          <CodeMirror
            value={value}
            basicSetup={{
              autocompletion: false,
              lineNumbers: true,
              foldGutter: false,
            }}
            extensions={[loadLanguage(mode)!].filter(Boolean)}
            theme={darcula}
            onChange={onChange}
            readOnly={readOnly}
          />
        </Label>
        {info && <InputInfo intent={intent}>{info}</InputInfo>}
      </Box>
    );
  },
);

export default CodeInput;
