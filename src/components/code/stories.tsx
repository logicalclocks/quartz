import { StoryObj, Meta } from '@storybook/react';
import { Box } from 'rebass';
import Code, { defaultPopupProps } from './index';

const meta: Meta<typeof Code> = {
  title: 'Code',
  argTypes: {
    content: {
      control: {
        type: 'text',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    language: {
      control: {
        type: 'text',
      },
    },
    copyButton: {
      control: {
        type: 'boolean',
      },
      defaultValue: { summary: false },
    },
    downloadButton: {
      control: {
        type: 'boolean',
      },
      description: 'Show download to clipboard button',
      defaultValue: { summary: false },
    },
    wrapLongLines: {
      control: {
        type: 'boolean',
      },
      description: 'Wrap long lines',
      defaultValue: { summary: false },
    },
    showLineNumbers: {
      control: {
        type: 'boolean',
      },
      description: 'Show line numbers',
      defaultValue: { summary: false },
    },
    expandable: {
      control: {
        type: 'boolean',
      },
      description:
        'Limit the content to 12 number of lines and add an expandable button to show the full content on popup',
      defaultValue: { summary: false },
    },
    popupProps: {
      control: {
        type: 'object',
      },
      description:
        'Setting custom style for the popup when showing the expanded version',
      defaultValue: defaultPopupProps,
    },
  },
};
export default meta;

type Story = StoryObj<typeof Code>;
export const Default: Story = {
  args: {
    copyButton: true,
    downloadButton: true,
    content:
      'SELECT ‘fg2’.’home_team_id’, ‘fg2’.\nFROM ‘demo_featurestore_admin000’\nINNER JOIN ‘demo_featurestore’',
    language: 'sql',
  },
  render: (props) => (
    <Box width="700px">
      <Code {...props} />
    </Box>
  ),
};

export const DefaultExpandable: Story = {
  args: {
    title: 'cargo.sh',
    expandable: true,
    wrapLongLines: true,
    language: 'sql',
  },
  render: (props) => {
    return (
      <Box width="700px">
        <Code {...props} content={content} />
      </Box>
    );
  },
};

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
