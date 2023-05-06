import { XEyes } from './x-eyes.js';
export { setAssetPath, setNonce, setPlatformOptions } from '@stencil/core/internal/client';

const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      XEyes,
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { defineCustomElements };

//# sourceMappingURL=index.js.map