import { p as promiseResolve, b as bootstrapLazy } from './index-90d3a68c.js';
export { s as setNonce } from './index-90d3a68c.js';

/*
 Stencil Client Patch Esm v3.2.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["x-eyes",[[1,"x-eyes",{"delay":[514],"distance":[514],"position":[520],"radius":[513],"reset":[516],"startFollowing":[64],"stopFollowing":[64],"resetPosition":[64]}]]]], options);
  });
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map