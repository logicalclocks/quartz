import { Box, Flex } from 'rebass';
import React, { FC, forwardRef } from 'react';
import {UnControlled} from 'react-codemirror2'
import getStyles from './index.styles';


import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/yaml/yaml.js';
// Note for dark-mode, good theme candidates: shadowbox, tomorrow-night-bright, dracula
import 'codemirror/theme/yeti.css';


// Components
import Label, { LabelProps } from '../label';
import { Labeling, Tooltip } from '../../index';
import icons from '../../sources/icons';

export interface InputProps {
  label?: string;
  value?: string;
  // Use javascript for displaying JSON
  mode: 'javascript' | 'yaml'
  width?: string | number;
  height?: string | number;
  labelAction?: React.ReactNode;
  optional?: boolean;
  tooltipInfo?: string;
  labelProps?: Omit<LabelProps, 'action' | 'text' | 'children'>;
  onChange: (value: string) => void;
}

const CodeInput: FC<InputProps> = forwardRef(
  (
    {
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
    }: InputProps
  ) => {

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
              {icons.info_block}
            </Box>
          </Tooltip>
        )}
      </Flex>
    );

    return (
      <Box width={width} height={height} sx={getStyles()}>
        <Label action={actions} text={label} width={width} height={height} {...labelProps}>
          <UnControlled
            value={value}
            options={{
                mode: {name: mode, json: true},
                theme: 'yeti',
                lineNumbers: true
            }}
            onChange={(editor, data, value) => {
              onChange(value);
            }}
          />
        </Label>
      </Box>
    );
  },
);

export default CodeInput;
