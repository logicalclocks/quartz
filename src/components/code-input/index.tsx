import { Box, Flex } from 'rebass';
import React, { FC, forwardRef } from 'react';
import { Controlled } from 'react-codemirror2';
import getStyles from './index.styles';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/yaml/yaml';
import 'codemirror/mode/python/python';
import 'codemirror/mode/sql/sql';
// Note for dark-mode, good theme candidates: shadowbox, tomorrow-night-bright, dracula
import 'codemirror/theme/yeti.css';

// Components
import Label, { LabelProps } from '../label';
import Labeling from '../typography/labeling';
import Tooltip from '../tooltip';
import { Intents } from '../intents';
import InputInfo from '../input-info';
import Icon from '../icon';
import { IconName } from '../icon/list';

export interface InputProps {
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

const CodeInput: FC<InputProps> = forwardRef(
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
  }: InputProps) => {
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
            <Box mt="-6px" mb="-3px">
              <Icon icon={IconName.info_block} />
            </Box>
          </Tooltip>
        )}
      </Flex>
    );

    return (
      <Box width={width} height={height} tx="inputs" sx={getStyles()}>
        <Label
          action={actions}
          text={label}
          width={width}
          height={height}
          {...labelProps}
          mb="8px"
        >
          <Controlled
            value={value}
            options={{
              mode:
                mode === 'javascript'
                  ? { name: mode, json: true }
                  : { name: mode },
              theme: 'yeti',
              lineNumbers: true,
              readOnly,
            }}
            onChange={() => {}}
            onBeforeChange={(_editor, _data, val: string) => {
              onChange(val);
            }}
          />
        </Label>
        {info && <InputInfo intent={intent}>{info}</InputInfo>}
      </Box>
    );
  },
);

export default CodeInput;
