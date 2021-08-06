# quartz-design-system

> Logical Clocks Design System Library

![header image](https://uploads-ssl.webflow.com/5e6f7cd3ee7f51d539a4da0b/5f58c6619b7b20b02e88b0d9_quartz.jpg)

[![NPM](https://img.shields.io/npm/v/@logicalclocks/quartz.svg)](https://www.npmjs.com/package/@logicalclocks/quartz) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

The current repo is the implementation of the library of the design system of Logical Clocks, so called Quartz.

- NPM package of React components TS
- use storybook as documentation
- use Rebass as a base CSS frame and Emotion for overwriting style

The DS is first experimented on Figma before being implemented:
[https://www.figma.com/file/mvY1f3xMXUEd6szvT82FxB/Feature-Store?node-id=327%3A0](https://www.figma.com/file/mvY1f3xMXUEd6szvT82FxB/Feature-Store?node-id=327%3A0)


## Github Pages

An online version of the Storybook can be found here: [Quartz Storybook](https://logicalclocks.github.io/quartz).

The version deployed corresponds to the `dev` branch and is updated on every new commit. 

## How to use the package?

### Installation

NPM
```bash
npm install --save @logicalclocks/quartz
```

Yarn
```bash
yarn add @logicalclocks/quartz
```

### Usage

```tsx
import React from 'react'

import { ThemeProvider, Button } from 'quartz-design-system'

const App = () => (
    <ThemeProvider>
      <Button>My button</Button>
    </ThemeProvider>
)
```

Since components are built on `rebass`, those have extended props from `Box` or `Flex' components.
It means that you can add some extra styles if they needed.

For example:
```tsx
<Button
    p="30px 40px 10px 0px"
    m="10px"
    width="auto"
>
  Button
</Button>
```

Put ThemeProvider Context on the top of components tree to provide the default theme.

The library has peer dependencies which need to be installed in a main project:
```json
{
    "rebass": "^4.0.7",
    "react": "^16.13.1",
    "emotion-theming": "^10.0.27"
}
```

## How to develop components for the package?

Run `npm run storybook`

Put new component in

## How to build?

Run `npm run build`


## License

AGPL-3.0 Licence  © [logicalclocks](https://github.com/logicalclocks)

## Run locally

Run `npm install` and then `npm run storybook`

## Build locally

Run `npm install` and then `npm run build-dev`

## Troubleshooting

Delete `node_modules` and `dist` folders then follow **Build locally** or **Run locally** instruction

## On repo update

Follow **Build locally** or **Run locally** instruction
