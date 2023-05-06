import { Config } from '@stencil/core'

export const config: Config = {
  namespace: 'web-xeyes',
  minifyJs: process.env.NODE_ENV === 'production',
  outputTargets: [
    { type: 'dist', esmLoaderPath: '../loader' },
    { type: 'dist-custom-elements', customElementsExportBehavior: 'bundle' },
    { type: 'docs-readme' },
    { type: 'docs-json', file: 'dist/docs/docs.json' },
    { type: 'docs-vscode', file: 'dist/docs/vscode.json' },
    { type: 'www', serviceWorker: null }
  ]
}
