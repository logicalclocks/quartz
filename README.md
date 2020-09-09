# quartz-design-system

> Logical Clocks Design System Library

![header image](https://uploads-ssl.webflow.com/5e6f7cd3ee7f51d539a4da0b/5f58c6619b7b20b02e88b0d9_quartz.jpg)

[![NPM](https://img.shields.io/npm/v/quartz-design-system.svg)](https://www.npmjs.com/package/quartz-design-system) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

The current repo is the implementation of the library of the design system of Logical Clocks, so called Quartz.

- NPM package of React components TS
- use storybook as documentation
- use Rebass as a base CSS frame and emotion for overwritting style

The DS is first experimented on Figma before being implemented:
[https://www.figma.com/file/mvY1f3xMXUEd6szvT82FxB/Feature-Store?node-id=327%3A0](https://www.figma.com/file/mvY1f3xMXUEd6szvT82FxB/Feature-Store?node-id=327%3A0)


## How to use the package?

### Installation

```bash
npm install --save quartz-design-system
```

### Usage

```tsx
import React, { Component } from 'react'

import MyComponent from 'quartz-design-system'
import 'quartz-design-system/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## How to develop components for the package?

Run `npm start` from the root to compile files automatically.

Simultenously, run `npm start`from `example` folder in order to preview component in the browser.


## License

MIT © [logicalclocks](https://github.com/logicalclocks)
