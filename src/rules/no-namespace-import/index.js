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
      namespaceValue: "Namespace import should be 'React'.",
    },
  },

  create(context) {
    return {
      ImportDeclaration(node) {
        const isReactImport = node.source.value === 'react'
        const isNamespaceImport =
          node.specifiers[0]?.type === 'ImportNamespaceSpecifier'
        const namespaceImport = isNamespaceImport
          ? node.specifiers[0].local.name
          : null

        if (!isReactImport) return

        if (!isNamespaceImport) {
          context.report({
            node,
            messageId: 'noReactImport',
            fix(fixer) {
              return fixer.replaceText(node, "import * as React from 'react'")
            },
          })

          return
        }

        if (namespaceImport !== 'React') {
          context.report({
            node,
            messageId: 'namespaceValue',
            fix(fixer) {
              return fixer.replaceText(node, "import * as React from 'react'")
            },
          })

          return
        }
      },
    }
  },
}
