import { Config } from '@stencil/core'

export const config: Config = {
  namespace: 'web-xeyes',
  minifyJs: process.env.NODE_ENV === 'production',
  outputTargets: [
    { type: 'dist', esmLoaderPath: '../loader' },
    { type: 'dist-custom-elements-bundle' },
    { type: 'docs-readme' },
    { type: 'www', serviceWorker: null }
  ]
}
