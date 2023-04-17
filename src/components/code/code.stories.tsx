import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Box } from 'rebass';
import Code, { CodeProps, defaultPopupProps } from './index';

export default {
  title: 'Quartz/Code',
  component: Code,
} as Meta;

const argTypes = {
  content: {
    control: {
      type: 'text',
    },
    type: {
      required: true,
      summary: 'Code content',
    },
  },
  title: {
    control: {
      type: 'text',
    },

    type: {
      summary: 'Code title',
    },
  },
  language: {
    control: {
      type: 'text',
    },

    type: {
      summary: 'Language of code to add proper coloring',
    },
  },
  copyButton: {
    control: {
      type: 'boolean',
    },
    type: {
      required: false,
      summary: 'Show copy to clipboard button',
    },
    defaultValue: { summary: false },
  },
  downloadButton: {
    control: {
      type: 'boolean',
    },
    type: {
      required: false,
      summary: 'Show download to clipboard button',
    },
    defaultValue: { summary: false },
  },
  wrapLongLines: {
    control: {
      type: 'boolean',
    },
    type: {
      summary: 'Wrap long lines',
    },
    defaultValue: { summary: false },
  },
  showLineNumbers: {
    control: {
      type: 'boolean',
    },
    type: {
      required: false,
      summary: 'Show line numbers',
    },
    defaultValue: { summary: false },
  },
  expandable: {
    control: {
      type: 'boolean',
    },
    type: {
      required: false,
      summary:
        'Limit the content to 12 number of lines and add an expandable button to show the full content on popup',
    },
    defaultValue: { summary: false },
  },
  popupProps: {
    control: {
      type: 'object',
    },
    type: {
      required: false,
      summary:
        'Setting custom style for the popup when showing the expanded version',
    },
    defaultValue: defaultPopupProps,
  },
};

// Default
const Template: Story<CodeProps> = (props) => (
  <Box width="700px">
    <Code {...props} />
  </Box>
);

export const Default = Template.bind({});

Default.args = {
  content:
    'SELECT ‘fg2’.’home_team_id’, ‘fg2’.\nFROM ‘demo_featurestore_admin000’\nINNER JOIN ‘demo_featurestore’',
};

Default.argTypes = argTypes;

// Expandable
const TemplateExpandable: Story<CodeProps> = (props) => (
  <Box width="700px">
    <Code {...props} />
  </Box>
);

export const Expandable = TemplateExpandable.bind({});

const content = `#!/bin/bash

## a verrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrry loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong line
set -e

if [ $# -lt 1 ] ; then
  echo "Usage: <prog> hostname [admin_port port]"
fi

admin_port=16005
port=14005
if [ $# -eq 3 ] ; then
  admin_port=$2
  port=$3
fi

cd ..
mvn -Dglassfish.port=$port -Dglassfish.admin_port=$admin_port -Dglassfish.hostname=$1 clean install -Pdeploy
cd scripts
./jim-bbc1-scp.sh
`;

Expandable.args = {
  content,
  title: 'cargo.sh',
  expandable: true,
  wrapLongLines: true,
};

Expandable.argTypes = argTypes;
