import { Box, Flex } from 'rebass';
import React, { FC, forwardRef } from 'react';
import { InputProps as RebassInputProps } from 'rebass__forms';
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

export interface InputProps extends Omit<RebassInputProps, 'css'> {
  label?: string;
  placeholder?: string;
  // Use javascript for displaying JSON
  mode: 'javascript' | 'yaml'
  width?: string | number;
  height?: string | number;
  labelAction?: React.ReactNode;
  optional?: boolean;
  tooltipInfo?: string;
  labelProps?: Omit<LabelProps, 'action' | 'text' | 'children'>;
}

const CodeInput: FC<InputProps> = forwardRef(
  (
    {
      label = '',
      placeholder,
      mode,
      width = '300px',
      height = '600px',
      labelAction,
      optional,
      tooltipInfo,
      labelProps,
      ...props
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
            value='const a = 10;'
            options={{
                mode: {name: "javascript", json: true},
                theme: 'yeti',
                lineNumbers: true
            }}
          />
        </Label>
      </Box>
    );
  },
);

export default CodeInput;
