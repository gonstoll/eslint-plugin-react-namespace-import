module.exports = {
  meta: {
    type: 'problem',
    fixable: 'code',
    hasSuggestions: true,
    docs: {
      description: "Enforce namespace import from 'react'.",
    },
    messages: {
      noReactImport: "Only namespace import from 'react' is allowed.",
    },
  },

  create(context) {
    return {
      ImportDeclaration(node) {
        if (
          node.source.value === 'react' &&
          node.specifiers[0].type !== 'ImportNamespaceSpecifier'
        ) {
          context.report({
            node,
            messageId: 'noReactImport',
            fix(fixer) {
              return fixer.replaceText(node, `import * as React from 'react'`)
            },
          })
        }
      },
    }
  },
}
