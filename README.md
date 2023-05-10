# eslint-plugin-react-namespace-import

ESLint plugin to enforce React namespace imports. This is useful for enforcing a consistent import style for React components.

## Installation

```sh
npm install --save-dev eslint-plugin-react-namespace-import
```

## Usage

On your `.eslintrc.json` file extend the plugin's recommended configuration:

```json
{
  "extends": ["plugin:react-namespace-import/recommended"]
}
```

If you want to use your own configuration, you can do so by adding the plugin to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["react-namespace-import"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "react-namespace-import/no-namespace-import": "warn"
  }
}
```

## Rules

```javascript
import React from 'react'
import {Component} from 'react'
import {Component as MyComponent} from 'react'
import React, {useState} from 'react'
import * as Foo from 'react'
```

These will get flagged, and you will be asked to use the namespace import instead:

```javascript
import * as React from 'react'
```
