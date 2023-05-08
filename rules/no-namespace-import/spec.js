const {ruleTester} = require('../../rule-tester')
const noNamespaceImport = require('.')

ruleTester.run('no-namespace-import', noNamespaceImport, {
  valid: [{code: "import * as React from 'react'"}],
  invalid: [
    {
      code: "import React from 'react'",
      errors: [{messageId: 'noReactImport'}],
      output: "import * as React from 'react'",
    },
    {
      code: "import {useState} from 'react'",
      errors: [{messageId: 'noReactImport'}],
      output: "import * as React from 'react'",
    },
    {
      code: "import React, {useState} from 'react'",
      errors: [{messageId: 'noReactImport'}],
      output: "import * as React from 'react'",
    },
    {
      code: "import {Component as MyComponent} from 'react'",
      errors: [{messageId: 'noReactImport'}],
      output: "import * as React from 'react'",
    },
  ],
})
